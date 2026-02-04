provider "aws" {
  region = var.region
}

# 1. Import Existing S3 Bucket Data
data "aws_s3_bucket" "selected" {
  bucket = var.bucket_name
}

# 2. Create CloudFront Origin Access Control (OAC)
resource "aws_cloudfront_origin_access_control" "default" {
  name                              = "${var.bucket_name}-oac"
  description                       = "OAC for ${var.bucket_name} S3 bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# --- NEW: ACM Certificate ---
resource "aws_acm_certificate" "cert" {
  domain_name       = var.domain_name
  validation_method = "DNS"

  subject_alternative_names = [var.root_domain_name]

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Environment = "Production"
    Project     = "CongaPacifico"
    ManagedBy   = "Terraform"
  }
}
# ----------------------------

# 3. Create CloudFront Distribution
resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name              = data.aws_s3_bucket.selected.bucket_regional_domain_name
    origin_id                = data.aws_s3_bucket.selected.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.default.id
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  # Use alias only if custom domain is enabled
  aliases = var.use_custom_domain ? [var.domain_name] : []

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = data.aws_s3_bucket.selected.bucket_regional_domain_name

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
  }

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = var.use_custom_domain ? false : true
    acm_certificate_arn            = var.use_custom_domain ? aws_acm_certificate.cert.arn : null
    ssl_support_method             = var.use_custom_domain ? "sni-only" : null
    minimum_protocol_version       = var.use_custom_domain ? "TLSv1.2_2021" : null
  }

  tags = {
    Environment = "Production"
    Project     = "CongaPacifico"
  }
}

# 4. Update S3 Bucket Policy
resource "aws_s3_bucket_policy" "allow_access_from_cloudfront" {
  bucket = data.aws_s3_bucket.selected.id
  policy = data.aws_iam_policy_document.s3_policy.json
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    sid    = "AllowCloudFrontServicePrincipal"
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = [
      "s3:GetObject"
    ]

    resources = [
      "${data.aws_s3_bucket.selected.arn}/*"
    ]

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.s3_distribution.arn]
    }
  }
}

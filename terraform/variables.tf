variable "bucket_name" {
  description = "The name of the existing S3 bucket containing the website content"
  type        = string
  default     = "conga-pacifico-web-5487"
}

variable "region" {
  description = "The AWS region where the bucket is located (CloudFront is global)"
  type        = string
  default     = "us-east-1"
}

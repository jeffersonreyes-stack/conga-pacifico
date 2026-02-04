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

variable "domain_name" {
  description = "The primary domain name for the website (e.g., www.example.com)"
  type        = string
  default     = "www.congapacifico.com"
}

variable "root_domain_name" {
  description = "The root domain name (e.g., example.com) to be included as a Subject Alternative Name"
  type        = string
  default     = "congapacifico.com"
}

variable "use_custom_domain" {
  description = "Set to true to attach the custom domain and certificate to CloudFront. IMPORTANT: Only set to true AFTER the certificate has been validated via DNS."
  type        = bool
  default     = false
}

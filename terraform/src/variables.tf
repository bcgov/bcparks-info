# variables.tf

variable "target_env" {
  description = "AWS workload account env (e.g. dev, test, prod, sandbox, unclass)"
}

variable "target_aws_account_id" {
  description = "AWS workload account id"
}

variable "aws_region" {
  description = "The AWS region things are created in"
}

variable "s3_bucket" {
  description = "S3 Bucket containing static web files for CloudFront distribution"
  type        = string
  default     = "bcprs-info"
}

variable "s3_bucket_name" {
  description = "Human readable S3 bucket name for labels"
  type        = string
  default     = "BC Parks Camping Info Page"
}

variable "origin_id" {
  description = "Cloudfront origin name"
  type        = string
}

variable "budget_amount" {
  description = "The amount of spend for the budget. Example: enter 100 to represent $100"
  default     = "100.0"
}

variable "budget_tag" {
  description = "The Cost Allocation Tag that will be used to build the monthly budget. "
  default     = "Project=BC Parks Camping Info Page System"
}

variable "common_tags" {
  description = "Common tags for created resources"
  default = {
    Application = "BC Parks Camping Info Page"
  }
}
variable "app_version" {
  description = "app version to deploy"
  type        = string
}

#CloudFront Roles

# BC Parks Info frontend bucket policy
data "aws_iam_policy_document" "bcprs-info-s3-policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.bcgov-bcprs-info.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.bcprs-info-oai.iam_arn]
    }
  }

  statement {
    actions   = ["s3:ListBucket"]
    resources = [aws_s3_bucket.bcgov-bcprs-info.arn]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.bcprs-info-oai.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "bcprs-info" {
  bucket = aws_s3_bucket.bcgov-bcprs-info.id
  policy = data.aws_iam_policy_document.bcprs-info-s3-policy.json
}

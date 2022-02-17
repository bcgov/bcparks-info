# outputs.tf

output "sns_topic" {
  value       = aws_sns_topic.billing_alert_topic_info.arn
  description = "Subscribe to this topic using your email to receive email alerts from the budget."
}

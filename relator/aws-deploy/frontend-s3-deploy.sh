# Sync Angular dist to S3 bucket (replace BUCKET_NAME)
aws s3 sync frontend/dist/realtor-app s3://BUCKET_NAME --delete
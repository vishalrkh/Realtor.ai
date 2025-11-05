# Realtor.ai AWS Deployment

## Frontend (Angular)

### S3 + CloudFront

- Use `frontend-s3-deploy.sh` to sync build files to S3.
- Configure CloudFront for HTTPS and CDN.

## Backend (Spring Boot)

### EC2 / Elastic Beanstalk

- Use `backend-eb-deploy.sh` for Elastic Beanstalk.
- For EC2, provision with `backend-ec2-setup.sh`.

### Database (RDS)

- Use RDS SQL Server. Run `/db/create_tables.sql` after DB creation.

## Secrets

- Set Razorpay keys and DB credentials in AWS Parameter Store or Elastic Beanstalk environment variables.

## Notes

See scripts in this folder for step-by-step automation.
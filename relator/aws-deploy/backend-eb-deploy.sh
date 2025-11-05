# Deploy backend to Elastic Beanstalk (replace ENV_NAME)
cd backend
mvn package
eb init -p java backend
eb create ENV_NAME
eb deploy
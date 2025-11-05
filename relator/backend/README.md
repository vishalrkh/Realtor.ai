# Realtor.ai Backend (Spring Boot)

## Setup

1. Create your SQL Server instance and run `/db/create_tables.sql`.
2. Update `/src/main/resources/application.properties` with your DB credentials.
3. Build and run:

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

## API Endpoints

- `POST /api/application` – Submit buyer application
- `POST /api/payment/create-order` – Create Razorpay order
- `POST /api/payment/verify` – Payment verification and DB save

## AWS Deployment

See `/aws-deploy/backend-eb-deploy.sh` and `/aws-deploy/README.md`.
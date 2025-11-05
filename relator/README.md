# Realtor.ai – AI-powered Real Estate Platform

## Overview

Realtor.ai is a full-stack AI-powered realtor application for managing buyer information, requirements, financials, and payments.

- **Frontend:** Angular (multi-step forms, speech-to-text, AI prefill, Razorpay payment)
- **Backend:** Spring Boot (REST API, SQL Server DB, payment verification)
- **Database:** SQL Server scripts in `/db`
- **Deployment:** AWS scripts in `/aws-deploy`

## Project Structure

- `/frontend` – Angular app
- `/backend` – Spring Boot backend
- `/db` – SQL Server scripts
- `/aws-deploy` – AWS deployment scripts

## Quick Start

1. **Database:** Run `/db/create_tables.sql` on your SQL Server instance.
2. **Backend:** See `/backend/README.md`
3. **Frontend:** See `/frontend/README.md`
4. **AWS:** See `/aws-deploy/README.md`

## Features

- Buyer information collection
- Requirements (schools, amenities, lifestyle)
- Financial profile analysis
- Secure payment via Razorpay
- Data stored in SQL Server
- Speech-to-text and AI form prefill

## Deployment

See `/aws-deploy/README.md` for step-by-step cloud deployment.
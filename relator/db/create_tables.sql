-- SQL Server Table DDL for Realtor.ai

CREATE TABLE DemoInfo (
    id INT IDENTITY PRIMARY KEY,
    name NVARCHAR(100),
    contact NVARCHAR(100),
    email NVARCHAR(100),
    occupation NVARCHAR(100),
    familySize INT,
    serviceType NVARCHAR(50),
    preferences NVARCHAR(200),
    comments NVARCHAR(500)
);

CREATE TABLE Requirements (
    id INT IDENTITY PRIMARY KEY,
    area NVARCHAR(50),
    propertyType NVARCHAR(50),
    schoolPreference NVARCHAR(100),
    trafficLevel NVARCHAR(50),
    yearBuilt NVARCHAR(50),
    shopsNearby NVARCHAR(200),
    desiredLifestyle NVARCHAR(100),
    comments NVARCHAR(500)
);

CREATE TABLE FinanceInfo (
    id INT IDENTITY PRIMARY KEY,
    rentBudget NVARCHAR(50),
    carOwned NVARCHAR(100),
    existingDebts NVARCHAR(200),
    incomeSource NVARCHAR(100),
    otherFinancialNotes NVARCHAR(500)
);

CREATE TABLE PaymentInfo (
    id INT IDENTITY PRIMARY KEY,
    paymentId NVARCHAR(100),
    orderId NVARCHAR(100),
    status NVARCHAR(50),
    paymentDetails NVARCHAR(500)
);
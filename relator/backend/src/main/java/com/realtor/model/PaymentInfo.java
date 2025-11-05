package com.realtor.model;

import javax.persistence.*;

@Entity
public class PaymentInfo {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String paymentId;
    private String orderId;
    private String status;
    private String paymentDetails;
    // getters and setters
}
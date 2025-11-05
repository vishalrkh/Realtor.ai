package com.realtor.controller;

import com.realtor.model.PaymentInfo;
import com.realtor.repository.PaymentInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {
    @Autowired private PaymentInfoRepository paymentInfoRepo;

    @PostMapping("/create-order")
    public Map<String, Object> createOrder() {
        // Call Razorpay API in production, here we stub
        Map<String, Object> order = new HashMap<>();
        order.put("id", "order_xyz");
        order.put("amount", 50000); // in paise
        return order;
    }

    @PostMapping("/verify")
    public String verifyPayment(@RequestBody Map<String, Object> paymentResponse) {
        // Verify payment with Razorpay
        PaymentInfo payment = new PaymentInfo();
        // ... set fields from paymentResponse
        paymentInfoRepo.save(payment);
        return "Success";
    }
}
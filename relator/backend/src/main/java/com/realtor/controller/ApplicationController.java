package com.realtor.controller;

import com.realtor.model.*;
import com.realtor.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/application")
public class ApplicationController {

    @Autowired private DemoInfoRepository demoInfoRepo;
    @Autowired private RequirementsRepository requirementsRepo;
    @Autowired private FinanceInfoRepository financeInfoRepo;
    @Autowired private PaymentInfoRepository paymentInfoRepo;

    @PostMapping
    public String submitApplication(@RequestBody Map<String, Object> payload) {
        // Deserialize and save each section
        // Use a JSON mapper or manual conversion for brevity
        // Example for manual mapping:
        DemoInfo demo = new DemoInfo();
        // ... set fields from payload.get("demoInfo")
        demoInfoRepo.save(demo);
        // Repeat for Requirements, FinanceInfo, PaymentInfo
        return "Application saved!";
    }
}
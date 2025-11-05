package com.realtor.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/prefill")
public class PrefillController {

    @PostMapping
    public String prefill(@RequestBody String body) {
        // Integrate with an external AI service and return suggestions
        return "Prefill data: " + body;
    }
}
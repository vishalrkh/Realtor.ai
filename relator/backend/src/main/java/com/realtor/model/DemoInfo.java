package com.realtor.model;

import javax.persistence.*;

@Entity
public class DemoInfo {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String contact;
    private String email;
    private String occupation;
    private int familySize;
    private String serviceType;
    private String preferences;
    private String comments;
    // getters and setters
}
package com.realtor.model;

import javax.persistence.*;

@Entity
public class Requirements {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String area;
    private String propertyType;
    private String schoolPreference;
    private String trafficLevel;
    private String yearBuilt;
    private String shopsNearby;
    private String desiredLifestyle;
    private String comments;
    // getters and setters
}
package com.realtor.model;

import javax.persistence.*;

@Entity
public class FinanceInfo {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String rentBudget;
    private String carOwned;
    private String existingDebts;
    private String incomeSource;
    private String otherFinancialNotes;
    // getters and setters
}
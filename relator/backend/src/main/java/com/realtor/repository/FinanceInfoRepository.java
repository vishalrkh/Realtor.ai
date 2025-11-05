package com.realtor.repository;

import com.realtor.model.FinanceInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FinanceInfoRepository extends JpaRepository<FinanceInfo, Long> {}
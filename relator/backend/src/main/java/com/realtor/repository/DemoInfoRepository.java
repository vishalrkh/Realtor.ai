package com.realtor.repository;

import com.realtor.model.DemoInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DemoInfoRepository extends JpaRepository<DemoInfo, Long> {}
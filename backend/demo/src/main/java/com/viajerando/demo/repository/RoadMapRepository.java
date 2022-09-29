package com.viajerando.demo.repository;

import com.viajerando.demo.entity.RoadMap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoadMapRepository extends JpaRepository<RoadMap, Long> { }

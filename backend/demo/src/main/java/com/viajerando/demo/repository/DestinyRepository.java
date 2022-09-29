package com.viajerando.demo.repository;

import com.viajerando.demo.entity.Destiny;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DestinyRepository extends JpaRepository<Destiny, Long> {}
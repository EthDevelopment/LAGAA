package com.lagaa.lagaaliving.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lagaa.lagaaliving.model.Finance;

public interface FinanceRepository extends JpaRepository<Finance, Long> {

    Finance findByUserId(Long userId);
}

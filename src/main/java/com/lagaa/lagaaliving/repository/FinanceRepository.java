package com.lagaa.lagaaliving.repository;

import com.lagaa.lagaaliving.model.Finance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FinanceRepository extends JpaRepository<Finance, Long> {

    Finance findByUserId(Long userId);
}

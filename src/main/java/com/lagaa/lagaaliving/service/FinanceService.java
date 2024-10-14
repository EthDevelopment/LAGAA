package com.lagaa.lagaaliving.service;

import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lagaa.lagaaliving.model.Finance;
import com.lagaa.lagaaliving.repository.FinanceRepository;

@Service
public class FinanceService {

    @Autowired
    private FinanceRepository financeRepository;

    // Method to retrieve finance data by userId
    public Finance getFinanceByUserId(Long userId) {
        return financeRepository.findByUserId(userId);
    }

    // Update cash balance method
    public Finance updateCashBalance(Long userId, Double amount) {
        Finance finance = financeRepository.findByUserId(userId);
        finance.setCashBalance(finance.getCashBalance().add(BigDecimal.valueOf(amount))); // Update cash balance
        return financeRepository.save(finance);
    }

    // Method to update assets value
    public Finance updateAssetsValue(Long userId, Double amount) {
        Finance finance = financeRepository.findByUserId(userId);
        finance.setAssetsValue(finance.getAssetsValue().add(BigDecimal.valueOf(amount))); // Update assets value
        return financeRepository.save(finance);
    }

    // Method to update stock value
    public Finance updateStockValue(Long userId, Double amount) {
        Finance finance = financeRepository.findByUserId(userId);
        finance.setStockValue(finance.getStockValue().add(BigDecimal.valueOf(amount))); // Update stock value
        return financeRepository.save(finance);
    }

    // Method to update crypto holdings
    public Finance updateCryptoHoldings(Long userId, Double amount) {
        Finance finance = financeRepository.findByUserId(userId);
        finance.setCryptoHoldings(finance.getCryptoHoldings().add(BigDecimal.valueOf(amount))); // Update crypto holdings
        return financeRepository.save(finance);
    }
}

package com.lagaa.lagaaliving.service;

import com.lagaa.lagaaliving.model.Finance;
import com.lagaa.lagaaliving.repository.FinanceRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class FinanceService {

    private final FinanceRepository financeRepository;

    public FinanceService(FinanceRepository financeRepository) {
        this.financeRepository = financeRepository;
    }

    // Get finance data by userId
    public Finance getFinanceByUserId(Long userId) {
        return financeRepository.findByUserId(userId);
    }

    // Update the cash balance (add/subtract)
    public Finance updateCashBalance(Long userId, double amount) {
        Finance finance = financeRepository.findByUserId(userId);
        if (finance != null) {
            // Convert the double amount to BigDecimal
            BigDecimal amountToAdd = BigDecimal.valueOf(amount);
            finance.setCashBalance(finance.getCashBalance().add(amountToAdd)); // Use add() method for BigDecimal
            financeRepository.save(finance);
        }
        return finance;
    }

    // Update the assets balance (add/subtract)
    public Finance updateAssetsBalance(Long userId, double amount) {
        Finance finance = financeRepository.findByUserId(userId);
        if (finance != null) {
            BigDecimal amountToAdd = BigDecimal.valueOf(amount);
            finance.setAssetsValue(finance.getAssetsValue().add(amountToAdd)); // Use add() method for BigDecimal
            financeRepository.save(finance);
        }
        return finance;
    }

    // Update the stock balance (add/subtract)
    public Finance updateStockBalance(Long userId, double amount) {
        Finance finance = financeRepository.findByUserId(userId);
        if (finance != null) {
            BigDecimal amountToAdd = BigDecimal.valueOf(amount);
            finance.setStockValue(finance.getStockValue().add(amountToAdd)); // Use add() method for BigDecimal
            financeRepository.save(finance);
        }
        return finance;
    }

    // Update the crypto balance (add/subtract)
    public Finance updateCryptoBalance(Long userId, double amount) {
        Finance finance = financeRepository.findByUserId(userId);
        if (finance != null) {
            BigDecimal amountToAdd = BigDecimal.valueOf(amount);
            finance.setCryptoHoldings(finance.getCryptoHoldings().add(amountToAdd)); // Use add() method for BigDecimal
            financeRepository.save(finance);
        }
        return finance;
    }
}

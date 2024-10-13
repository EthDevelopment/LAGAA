package com.lagaa.lagaaliving.service;

import com.lagaa.lagaaliving.model.Finance;
import com.lagaa.lagaaliving.repository.FinanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;

@Service
public class FinanceService {

    @Autowired
    private FinanceRepository financeRepository;

    // Get the current account balance
    public Long getAccountBalance() {
        // Get the most recent transaction to retrieve the current balance
        return financeRepository.findAll().stream()
                .map(Finance::getTotalBalance)
                .reduce((first, second) -> second) // Get the last transaction's balance
                .orElse(0L);  // Default to 0 if no transactions exist
    }

    // Add money to the account
    public Finance addMoney(Long amount) {
        Long currentBalance = getAccountBalance();
        Finance finance = new Finance();
        finance.setTransactionId(System.currentTimeMillis());  // For simplicity, use the current timestamp as the transaction ID
        finance.setChangeAmount(amount);
        finance.setChangeType("ADD");
        finance.setTotalBalance(currentBalance + amount);
        finance.setTime(new Timestamp(System.currentTimeMillis()));
        return financeRepository.save(finance);
    }

    // Subtract money from the account
    public Finance subtractMoney(Long amount) {
        Long currentBalance = getAccountBalance();
        Finance finance = new Finance();
        finance.setTransactionId(System.currentTimeMillis());  // For simplicity, use the current timestamp as the transaction ID
        finance.setChangeAmount(amount);
        finance.setChangeType("SUBTRACT");
        finance.setTotalBalance(currentBalance - amount);
        finance.setTime(new Timestamp(System.currentTimeMillis()));
        return financeRepository.save(finance);
    }
}

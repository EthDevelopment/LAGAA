package com.lagaa.lagaaliving.controller;

import com.lagaa.lagaaliving.model.Finance;
import com.lagaa.lagaaliving.dto.AmountDTO;  // Import the DTO
import com.lagaa.lagaaliving.service.FinanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/finances")
@CrossOrigin(origins = "http://localhost:3000")  // Add this line
public class FinanceController {

    @Autowired
    private FinanceService financeService;

    // GET account balance
    @GetMapping("/accountBalance")
    public Long getAccountBalance() {
        return financeService.getAccountBalance();
    }

    // POST - Add money to the account
    @PostMapping("/addMoney")
    public Finance addMoney(@RequestBody AmountDTO amountDTO) {
        return financeService.addMoney(amountDTO.getAmount()); // Use the amount from the DTO
    }

    // POST - Subtract money from the account
    @PostMapping("/subMoney")
    public Finance subtractMoney(@RequestBody AmountDTO amountDTO) {
        return financeService.subtractMoney(amountDTO.getAmount()); // Use the amount from the DTO
    }
}
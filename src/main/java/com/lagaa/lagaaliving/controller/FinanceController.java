package com.lagaa.lagaaliving.controller;

import com.lagaa.lagaaliving.model.Finance;
import com.lagaa.lagaaliving.service.FinanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000") // Replace with your frontend URL
@RestController
@RequestMapping("/finance")
public class FinanceController {

    @Autowired
    private FinanceService financeService;

    // GET endpoint to retrieve finance data by userId
    @GetMapping("/{userId}")
    public ResponseEntity<Finance> getFinance(@PathVariable Long userId) {
        Finance finance = financeService.getFinanceByUserId(userId);
        return ResponseEntity.ok(finance);
    }

    // PATCH endpoint to update the cash balance
    @PatchMapping("/{userId}/cash")
    public ResponseEntity<Finance> updateCashBalance(
            @PathVariable Long userId,
            @RequestBody Map<String, Double> body) {
        Double amount = body.get("amount"); // Extract the amount from the JSON body
        Finance updatedFinance = financeService.updateCashBalance(userId, amount);
        return ResponseEntity.ok(updatedFinance);
    }

    // PATCH endpoint to update the assets value
    @PatchMapping("/{userId}/assets")
    public ResponseEntity<Finance> updateAssetsValue(
            @PathVariable Long userId,
            @RequestBody Map<String, Double> body) {
        Double amount = body.get("amount");
        Finance updatedFinance = financeService.updateAssetsValue(userId, amount);
        return ResponseEntity.ok(updatedFinance);
    }

    // PATCH endpoint to update the stock value
    @PatchMapping("/{userId}/stocks")
    public ResponseEntity<Finance> updateStockValue(
            @PathVariable Long userId,
            @RequestBody Map<String, Double> body) {
        Double amount = body.get("amount");
        Finance updatedFinance = financeService.updateStockValue(userId, amount);
        return ResponseEntity.ok(updatedFinance);
    }

    // PATCH endpoint to update the crypto holdings
    @PatchMapping("/{userId}/crypto")
    public ResponseEntity<Finance> updateCryptoHoldings(
            @PathVariable Long userId,
            @RequestBody Map<String, Double> body) {
        Double amount = body.get("amount");
        Finance updatedFinance = financeService.updateCryptoHoldings(userId, amount);
        return ResponseEntity.ok(updatedFinance);
    }
}

package com.lagaa.lagaaliving.controller;

import com.lagaa.lagaaliving.model.Finance;
import com.lagaa.lagaaliving.service.FinanceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/finance")
public class FinanceController {

    private final FinanceService financeService;

    public FinanceController(FinanceService financeService) {
        this.financeService = financeService;
    }

    // GET endpoint to retrieve finance data by userId
    @GetMapping("/{userId}")
    public ResponseEntity<Finance> getFinance(@PathVariable Long userId) {
        Finance finance = financeService.getFinanceByUserId(userId);
        if (finance == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(finance);
    }

    // PATCH endpoint to update the cash balance
    @PatchMapping("/{userId}/cash")
    public ResponseEntity<Finance> updateCashBalance(
            @PathVariable Long userId,
            @RequestParam double amount) {
        Finance updatedFinance = financeService.updateCashBalance(userId, amount);
        return ResponseEntity.ok(updatedFinance);
    }

    // PATCH endpoint to update the assets balance
    @PatchMapping("/{userId}/assets")
    public ResponseEntity<Finance> updateAssetsBalance(
            @PathVariable Long userId,
            @RequestParam double amount) {
        Finance updatedFinance = financeService.updateAssetsBalance(userId, amount);
        return ResponseEntity.ok(updatedFinance);
    }

    // PATCH endpoint to update the stock balance
    @PatchMapping("/{userId}/stock")
    public ResponseEntity<Finance> updateStockBalance(
            @PathVariable Long userId,
            @RequestParam double amount) {
        Finance updatedFinance = financeService.updateStockBalance(userId, amount);
        return ResponseEntity.ok(updatedFinance);
    }

    // PATCH endpoint to update the crypto balance
    @PatchMapping("/{userId}/crypto")
    public ResponseEntity<Finance> updateCryptoBalance(
            @PathVariable Long userId,
            @RequestParam double amount) {
        Finance updatedFinance = financeService.updateCryptoBalance(userId, amount);
        return ResponseEntity.ok(updatedFinance);
    }
}

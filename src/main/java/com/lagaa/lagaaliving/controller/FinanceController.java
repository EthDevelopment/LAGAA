package com.lagaa.lagaaliving.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lagaa.lagaaliving.model.Finance;
import com.lagaa.lagaaliving.repository.FinanceRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FinanceController {

    @Autowired
    private FinanceRepository financeRepository;

    @GetMapping("/Finances")
    public List<Finance> getFinances() {
        System.out.println("Fetching Finances...");
        return financeRepository.findAll();
    }
}

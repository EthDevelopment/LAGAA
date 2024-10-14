package com.lagaa.lagaaliving.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "finance")
public class Finance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false, columnDefinition = "decimal(10,2) default 0.00")
    private BigDecimal cashBalance = BigDecimal.ZERO;

    @Column(nullable = false, columnDefinition = "decimal(10,2) default 0.00")
    private BigDecimal assetsValue = BigDecimal.ZERO;

    @Column(nullable = false, columnDefinition = "decimal(10,2) default 0.00")
    private BigDecimal stockValue = BigDecimal.ZERO;

    @Column(nullable = false, columnDefinition = "decimal(10,2) default 0.00")
    private BigDecimal cryptoHoldings = BigDecimal.ZERO;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public BigDecimal getCashBalance() {
        return cashBalance;
    }

    public void setCashBalance(BigDecimal cashBalance) {
        this.cashBalance = cashBalance;
    }

    public BigDecimal getAssetsValue() {
        return assetsValue;
    }

    public void setAssetsValue(BigDecimal assetsValue) {
        this.assetsValue = assetsValue;
    }

    public BigDecimal getStockValue() {
        return stockValue;
    }

    public void setStockValue(BigDecimal stockValue) {
        this.stockValue = stockValue;
    }

    public BigDecimal getCryptoHoldings() {
        return cryptoHoldings;
    }

    public void setCryptoHoldings(BigDecimal cryptoHoldings) {
        this.cryptoHoldings = cryptoHoldings;
    }
}

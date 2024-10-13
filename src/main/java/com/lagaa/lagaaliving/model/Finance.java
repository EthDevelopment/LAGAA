package com.lagaa.lagaaliving.model;

import jakarta.persistence.*;
import lombok.Data;
import java.sql.Timestamp;

@Entity
@Data
@Table(name = "finance")
public class Finance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long transactionId;

    @Column(nullable = false)
    private Timestamp time;

    @Column(nullable = false)
    private Long totalBalance;

    @Column(nullable = false)
    private Long changeAmount;

    @Column(nullable = false)
    private String changeType;  // Either "ADD" or "SUBTRACT"
}

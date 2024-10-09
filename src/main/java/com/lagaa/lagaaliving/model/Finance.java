package com.lagaa.lagaaliving.model;

import java.sql.Timestamp;
import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "finance")
public class Finance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long depositid;

    @CreationTimestamp
    @Column(nullable = false)
    private Timestamp time; // Previously dateAdded, renamed to 'time'

    @Column(nullable = false)
    private Long totalBalance;

    @Column(nullable = false)
    private Long addAmount;

    @Column(nullable = false)
    private Long subtractAmount;
}

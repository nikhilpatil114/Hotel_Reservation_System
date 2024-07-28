package com.app.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class Hotel {
    @Id
    private String hotelid;

    @Column(nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "locationID")
    private Location location;

    @Column(precision = 2, scale = 1)
    private BigDecimal rating;
}


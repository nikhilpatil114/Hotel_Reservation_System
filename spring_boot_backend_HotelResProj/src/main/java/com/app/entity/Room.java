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
public class Room {
    @Id
    private String roomid;

    @ManyToOne
    @JoinColumn(name = "hotelid")
    private Hotel hotel;

    @Column(nullable = false)
    private String roomType;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Column(nullable = false)
    private Boolean availability;
}


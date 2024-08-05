package com.app.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "room")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomid;
     private String roomtype;

    @Column(nullable = false)
    private Double pricepernight;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AvailabilityStatus availabilitystatus;

    public enum AvailabilityStatus {
        AVAILABLE, BOOKED, MAINTENANCE
    }
}

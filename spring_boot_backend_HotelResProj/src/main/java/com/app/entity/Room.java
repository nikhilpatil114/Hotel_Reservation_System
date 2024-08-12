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

   
    @Column(nullable = false)
    private String availabilitystatus;

   
}

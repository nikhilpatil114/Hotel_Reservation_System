package com.app.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@Entity
@Table(name = "booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingid;

    @ManyToOne(fetch = FetchType.EAGER)
     @JoinColumn(name = "userid" , referencedColumnName = "userid" , nullable=false)
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "hotelid", referencedColumnName = "hotelid" , nullable=false )
    private Hotel hotel;

    @Column(nullable = false)
    private LocalDate checkindate;

    @Column(nullable = false)
    private LocalDate checkoutdate;

    @Column(nullable = false)
    private LocalDate bookingdate;

    @Column(nullable = false)
    private Double totalamount;
   
}

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
    private Integer bookingid;

    @ManyToOne
    @JoinColumn(name = "userid", foreignKey = @ForeignKey(name = "fk_booking_user"))
    private User user;

    @ManyToOne
    @JoinColumn(name = "hotelid", foreignKey = @ForeignKey(name = "fk_booking_hotel"))
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

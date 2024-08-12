package com.app.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@Entity
@Table(name = "payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentid;

    @ManyToOne
    @JoinColumn(name = "bookingid", foreignKey = @ForeignKey(name = "fk_payment_booking"))
    private Booking booking;

    @Column(nullable = false)
    private LocalDate paymentdate;

    @Column(nullable = false)
    private Double amount;

   
    @Column(nullable = false)
    private String paymentmethod;

    
    @Column(nullable = false)
    private String status;



}

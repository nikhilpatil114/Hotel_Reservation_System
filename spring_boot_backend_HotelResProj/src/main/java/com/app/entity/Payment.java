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
    private Integer paymentid;

    @ManyToOne
    @JoinColumn(name = "bookingid", foreignKey = @ForeignKey(name = "fk_payment_booking"))
    private Booking booking;

    @Column(nullable = false)
    private LocalDate paymentdate;

    @Column(nullable = false)
    private Double amount;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PaymentMethod paymentmethod;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PaymentStatus status;

    public enum PaymentMethod {
        CREDIT_CARD, DEBIT_CARD, PAYPAL
    }

    public enum PaymentStatus {
        COMPLETED, PENDING
    }
}

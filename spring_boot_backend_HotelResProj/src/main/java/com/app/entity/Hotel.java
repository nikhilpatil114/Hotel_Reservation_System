package com.app.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "hotel")
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer hotelid;

    @Column(nullable = false)
    private String hotelname;

    @ManyToOne
    @JoinColumn(name = "city", foreignKey = @ForeignKey(name = "fk_hotel_location"))
    private Location location;
    
    @OneToOne
    @JoinColumn(name = "roomid", foreignKey = @ForeignKey(name = "fk_hotel_room"))
    private Room room;
}

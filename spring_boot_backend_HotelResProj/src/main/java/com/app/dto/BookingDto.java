package com.app.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.app.entity.Booking.Status;

public class BookingDto {
         
	private Long id;
	private String city;
    private String name;
	private String roomType;
    private BigDecimal price;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private Status status;
    
    public BookingDto() {
		// TODO Auto-generated constructor stub
	}
	public BookingDto(Long id, String city, String name, String roomType, BigDecimal price, LocalDate checkInDate,
			LocalDate checkOutDate, Status status) {
		super();
		this.id = id;
		this.city = city;
		this.name = name;
		this.roomType = roomType;
		this.price = price;
		this.checkInDate = checkInDate;
		this.checkOutDate = checkOutDate;
		this.status = status;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRoomType() {
		return roomType;
	}
	public void setRoomType(String roomType) {
		this.roomType = roomType;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public LocalDate getCheckInDate() {
		return checkInDate;
	}
	public void setCheckInDate(LocalDate checkInDate) {
		this.checkInDate = checkInDate;
	}
	public LocalDate getCheckOutDate() {
		return checkOutDate;
	}
	public void setCheckOutDate(LocalDate checkOutDate) {
		this.checkOutDate = checkOutDate;
	}
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}
    
}

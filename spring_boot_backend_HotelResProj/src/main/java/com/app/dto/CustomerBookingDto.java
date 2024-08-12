package com.app.dto;

import java.time.LocalDate;

public class CustomerBookingDto {
	
	private int bookingid;
    private LocalDate bookingdate;
    private LocalDate checkindate;
    private LocalDate checkoutdate;
    private Double totalamount;
    private String hotelname; // Directly include hotelname object
    private String username; 
    private String city;
    private String state;
    private String roomtype;
    private String amount;
    private String status;
	
    public CustomerBookingDto() {
		// TODO Auto-generated constructor stub
	}
    
    
    
    public CustomerBookingDto(int bookingid, LocalDate bookingdate, LocalDate checkindate, LocalDate checkoutdate,
			Double totalamount, String hotelname, String username, String city, String state, String roomtype,
			String amount, String status) {
		super();
		this.bookingid = bookingid;
		this.bookingdate = bookingdate;
		this.checkindate = checkindate;
		this.checkoutdate = checkoutdate;
		this.totalamount = totalamount;
		this.hotelname = hotelname;
		this.username = username;
		this.city = city;
		this.state = state;
		this.roomtype = roomtype;
		this.amount = amount;
		this.status = status;
	}



	public int getBookingid() {
		return bookingid;
	}



	public void setBookingid(int bookingid) {
		this.bookingid = bookingid;
	}



	public LocalDate getBookingdate() {
		return bookingdate;
	}



	public void setBookingdate(LocalDate bookingdate) {
		this.bookingdate = bookingdate;
	}



	public LocalDate getCheckindate() {
		return checkindate;
	}



	public void setCheckindate(LocalDate checkindate) {
		this.checkindate = checkindate;
	}



	public LocalDate getCheckoutdate() {
		return checkoutdate;
	}



	public void setCheckoutdate(LocalDate checkoutdate) {
		this.checkoutdate = checkoutdate;
	}



	public Double getTotalamount() {
		return totalamount;
	}



	public void setTotalamount(Double totalamount) {
		this.totalamount = totalamount;
	}



	public String getHotelname() {
		return hotelname;
	}



	public void setHotelname(String hotelname) {
		this.hotelname = hotelname;
	}



	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public String getState() {
		return state;
	}



	public void setState(String state) {
		this.state = state;
	}



	public String getRoomtype() {
		return roomtype;
	}



	public void setRoomtype(String roomtype) {
		this.roomtype = roomtype;
	}



	public String getAmount() {
		return amount;
	}



	public void setAmount(String amount) {
		this.amount = amount;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}
    
    
    

}

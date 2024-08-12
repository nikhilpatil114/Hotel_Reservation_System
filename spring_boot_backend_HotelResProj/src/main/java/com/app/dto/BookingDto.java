package com.app.dto;

import java.time.LocalDate;

import com.app.entity.Hotel;
import com.app.entity.User;

public class BookingDto {

	private Long bookingid;
    private LocalDate bookingdate;
    private LocalDate checkindate;
    private LocalDate checkoutdate;
    private Double totalamount;
    private String hotelname; // Directly include hotelname object
    private String username;   // Directly include User object
   

    // Constructors
    public BookingDto() {
    }

    public BookingDto(Long bookingid, LocalDate bookingdate, LocalDate checkindate, LocalDate checkoutdate, Double totalamount, String hotelname,String username) {
        this.bookingid = bookingid;
        this.bookingdate = bookingdate;
        this.checkindate = checkindate;
        this.checkoutdate = checkoutdate;
        this.totalamount = totalamount;
        this.hotelname = hotelname;
        this.username = username;
    }

	public Long getBookingId() {
		return bookingid;
	}

	public void setBookingId(Long bookingid) {
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
	
	

	



	

    // Getters and Setters
   
}

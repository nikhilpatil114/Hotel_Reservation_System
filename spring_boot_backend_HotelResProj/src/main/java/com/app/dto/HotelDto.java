package com.app.dto;

public class HotelDto {
    private Long hotelid;
    private String hotelname;
    private String roomtype;
    private String availabilitystatus;
    private double pricepernight;
    private String city;
    private String state;

    
	public HotelDto() {
	}


	public HotelDto(Long hotelid, String hotelname, String roomtype, String availabilitystatus, double pricepernight,
			String city, String state) {
		super();
		this.hotelid = hotelid;
		this.hotelname = hotelname;
		this.roomtype = roomtype;
		this.availabilitystatus = availabilitystatus;
		this.pricepernight = pricepernight;
		this.city = city;
		this.state = state;
	}


	public Long getHotelid() {
		return hotelid;
	}


	public void setHotelid(Long hotelid) {
		this.hotelid = hotelid;
	}


	public String getHotelname() {
		return hotelname;
	}


	public void setHotelname(String hotelname) {
		this.hotelname = hotelname;
	}


	public String getRoomtype() {
		return roomtype;
	}


	public void setRoomtype(String roomtype) {
		this.roomtype = roomtype;
	}


	public String getAvailabilitystatus() {
		return availabilitystatus;
	}


	public void setAvailabilitystatus(String availabilitystatus) {
		this.availabilitystatus = availabilitystatus;
	}


	public double getPricepernight() {
		return pricepernight;
	}


	public void setPricepernight(double pricepernight) {
		this.pricepernight = pricepernight;
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
	
}

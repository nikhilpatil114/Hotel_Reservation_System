package com.app.dto;

public class HotelDtonew {

    private String hotelname;
    private String city;

    public HotelDtonew(String hotelname, String city) {
        this.hotelname = hotelname;
        this.city = city;
    }

    // Getters and setters
    public String getHotelname() {
        return hotelname;
    }

    public void setHotelname(String hotelname) {
        this.hotelname = hotelname;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}

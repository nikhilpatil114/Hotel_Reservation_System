package com.app.service;

import com.app.dto.HotelDto;

import java.util.List;

public interface HotelAdminService {
    List<HotelDto> getAllHotels();
    HotelDto getHotelById(Long hotelId);
    HotelDto addHotel(HotelDto hotelDto);
    HotelDto updateHotel(Long hotelId, HotelDto hotelDto);
    void deleteHotel(Long hotelId);
}

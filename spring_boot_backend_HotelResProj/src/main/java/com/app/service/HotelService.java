package com.app.service;

import com.app.dto.HotelDtonew;
import com.app.entity.Hotel;
import com.app.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HotelService {

    @Autowired
    private HotelRepository hotelRepository;

    public List<HotelDtonew> getHotelsByCity(String city) {
        return hotelRepository.findByLocation_City(city).stream()
            .map(hotel -> new HotelDtonew(hotel.getHotelname(), hotel.getLocation().getCity()))
            .collect(Collectors.toList());
    }
}

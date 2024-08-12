package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.HotelDtonew;
import com.app.service.HotelService;
import com.app.service.LocationService;

@RestController
@RequestMapping("/api/hotels")
public class HotelController {

    @Autowired
    private HotelService hotelService;
    @Autowired
    private LocationService locationService;

    @GetMapping("/by-city")
    public List<HotelDtonew> getHotelsByCity(@RequestParam String city) {
        return hotelService.getHotelsByCity(city);
    }
    
    @GetMapping("/cities")
    public List<String> getAllCities() {
        return locationService.getAllCityNames();
    }
}




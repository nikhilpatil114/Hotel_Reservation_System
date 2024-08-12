package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Location;
import com.app.repository.LocationRepository;

@Service
public class LocationService {

    @Autowired
    private LocationRepository locationRepository;

    public List<String> getAllCityNames() {
        return locationRepository.findAll().stream()
            .map(Location::getCity)
            .collect(Collectors.toList());
    }
}


package com.book.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.book.entities.Hotels;
import com.book.repository.HotelsRepository;

@Service
public class HotelsService {

    @Autowired
    private HotelsRepository hotelsRepository;

    public Hotels saveHotel(Hotels hotel) {
        return hotelsRepository.save(hotel);
    }
 

    public void deleteHotelById(Long id) {
        if (hotelsRepository.existsById(id)) {
            hotelsRepository.deleteById(id);
        } else {
            throw new RuntimeException("Hotel with ID " + id + " does not exist");
        }
    }
    public Hotels updateHotel(Long hotelId, Hotels updatedHotel) {
        Optional<Hotels> existingHotelOpt = hotelsRepository.findById(hotelId);
        if (existingHotelOpt.isPresent()) {
            Hotels existingHotel = existingHotelOpt.get();
            existingHotel.setOwnername(updatedHotel.getOwnername());
            existingHotel.setHotelname(updatedHotel.getHotelname());
            existingHotel.setCity(updatedHotel.getCity());
            existingHotel.setState(updatedHotel.getState());
            return hotelsRepository.save(existingHotel);
        } else {
            throw new RuntimeException("Hotel not found with id " + hotelId);
        }
    }
}


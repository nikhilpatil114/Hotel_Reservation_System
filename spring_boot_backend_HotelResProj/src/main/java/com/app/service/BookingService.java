package com.app.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.BookingDto;
import com.app.entity.Booking;
import com.app.entity.Room;
import com.app.repository.BookingRepository;
@Service
@Transactional
public class BookingService implements IBookingService{
    @Autowired
    BookingRepository bookingRepository;
    
    @Autowired
    private ModelMapper mapper;
//	public List<Booking> getbooking() {
//	
//		return bookingRepository.findAll();
//	}
	@Override
	 public BookingDto bookingDetails(Long id) {
        Optional<Booking> bookingOptional = bookingRepository.findById(id);

        if (bookingOptional.isPresent()) {
            Booking booking = bookingOptional.get();
            Room room = booking.getRoom();

            BookingDto dto = new BookingDto();
            dto.setId(booking.getBookingid());
            dto.setCity(room.getHotel().getLocation().getCity());
            dto.setName(room.getHotel().getName());
            dto.setRoomType(room.getRoomType());
            dto.setPrice(room.getPrice());
            dto.setCheckInDate(booking.getCheckInDate());
            dto.setCheckOutDate(booking.getCheckOutDate());
            dto.setStatus(booking.getStatus());

            return dto;
        } else {
            // Handle case where the booking does not exist
            return null;
        }
    }
	public List<Booking> getBooking() {
		return bookingRepository.findAll();
		
	}

}

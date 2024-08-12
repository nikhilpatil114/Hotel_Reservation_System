package com.app.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.BookingDto;
import com.app.dto.CustomerBookingDto;
import com.app.entity.Booking;
import com.app.exception.InvalidCrendentialException;
import com.app.repository.BookingRepository;

@Service
@Transactional
public class ICustomerSevice implements CustomerService {

	@Autowired
	private ModelMapper mapper;
	
	
	@Autowired
	private BookingRepository bookingRepository;
	
	
	@Override
	public CustomerBookingDto getById(Long id) {
	    // Retrieve the Booking wrapped in an Optional
	    Optional<Booking> optionalBooking = bookingRepository.findById(id);

	    // Map the Booking to CustomerBookingDto if present, otherwise throw an exception
	    return optionalBooking
	        .map(booking -> {
	            CustomerBookingDto cbd = mapper.map(booking, CustomerBookingDto.class);
	            cbd.setHotelname(booking.getHotel().getHotelname());
	            cbd.setRoomtype(booking.getHotel().getRoom().getRoomtype());
	            cbd.setCity(booking.getHotel().getLocation().getCity());
	            cbd.setUsername(booking.getUser().getUsername());
	            cbd.setState(booking.getHotel().getLocation().getState());
	            
	            return cbd;
	        })
	        .orElseThrow(() -> new InvalidCrendentialException("Invalid booking ID"));
	}




    
	
	
}

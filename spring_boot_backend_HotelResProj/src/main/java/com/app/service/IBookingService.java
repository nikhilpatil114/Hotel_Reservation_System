package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Booking;
import com.app.repository.BookingRepository;
@Service
public class IBookingService implements BookingService {
    @Autowired
    BookingRepository bookingRepository;
	@Override
	public List<Booking> getBooking() {
		
		return bookingRepository.findAll();
	}

}

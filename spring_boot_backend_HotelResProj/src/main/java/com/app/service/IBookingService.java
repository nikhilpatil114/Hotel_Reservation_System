package com.app.service;

import java.util.List;

import com.app.dto.BookingDto;
import com.app.entity.Booking;

public interface IBookingService {
	//List<Booking> getbooking();
	
	BookingDto bookingDetails(Long id);
	 List<Booking> getBooking();
}

package com.app.service;

import java.util.List;

import com.app.dto.BookingDto;
import com.app.entity.Booking;

public interface BookingService {

	List<Booking> getBooking();
	
	 List<BookingDto> getAllBookings();

}

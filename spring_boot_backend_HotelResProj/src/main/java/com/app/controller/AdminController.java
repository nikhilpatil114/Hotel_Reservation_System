package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Booking;
import com.app.entity.Hotel;
import com.app.service.BookingService;
//import com.app.service.HotelService;

@RestController
@RequestMapping("Admin")
public class AdminController {
	@Autowired
	BookingService bookingService;
	//@Autowired
//	HotelService hotelService;
	@GetMapping("/getbooking")
	public List<Booking> getBooking(){
		return bookingService.getBooking();
	}
//	@PostMapping("/hotel")
//	public String addhotel(@RequestBody Hotel hot) {
//		
//		return "Data Added Succesfully";
//		
//	}

}

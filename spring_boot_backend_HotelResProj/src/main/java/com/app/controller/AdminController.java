package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Booking;
import com.app.service.BookingService;

@RestController
@RequestMapping("/Admin")
public class AdminController {
@Autowired
BookingService bookingService;
@GetMapping
public List<Booking> getBooking(){
	return bookingService.getBooking();
}
}

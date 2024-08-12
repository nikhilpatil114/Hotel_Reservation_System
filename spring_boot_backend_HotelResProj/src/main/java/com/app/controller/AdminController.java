package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BookingDto;
import com.app.dto.HotelDto;
import com.app.entity.Booking;
import com.app.service.BookingService;
import com.app.service.HotelAdminService;
//import com.app.service.HotelService;

@RestController
@RequestMapping("Admin")
@CrossOrigin
public class AdminController {
	@Autowired
	BookingService bookingService;
	
	@Autowired
	HotelAdminService hotelAdminService;
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
	@GetMapping("/getbookingdetail")
	List<BookingDto> getAllDetails(){
		return bookingService.getAllBookings();
	}
	@GetMapping("/getallhotel")
    public List<HotelDto> getAllHotels() {
        return hotelAdminService.getAllHotels();
    }

    @GetMapping("/{hotelId}")
    public HotelDto getHotelById(@PathVariable Long hotelId) {
        return hotelAdminService.getHotelById(hotelId);
    }

    @PostMapping
    public HotelDto addHotel(@RequestBody HotelDto hotelDto) {
        return hotelAdminService.addHotel(hotelDto);
    }
    
    @PutMapping("/{hotelId}")
    public HotelDto updateHotel(@PathVariable Long hotelId, @RequestBody HotelDto hotelDto) {
    	return hotelAdminService.updateHotel(hotelId, hotelDto);
    }

    @DeleteMapping("/{hotelId}")
    public void deleteHotel(@PathVariable Long hotelId) {
    	hotelAdminService.deleteHotel(hotelId);
    }

}

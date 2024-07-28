package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BookingDto;
import com.app.entity.Booking;
import com.app.service.BookingService;

@RestController
@RequestMapping("/booking")
public class CustomerController {
@Autowired
BookingService bookingService;
//@GetMapping
//public List<Booking> getbooking(){
//	return bookingService.getbooking();
//}
@GetMapping("/{id}")
public ResponseEntity<BookingDto> getBookingDetails(@PathVariable Long id) {
    BookingDto bookingDto = bookingService.bookingDetails(id);

    if (bookingDto != null) {
        return new ResponseEntity<>(bookingDto, HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
}

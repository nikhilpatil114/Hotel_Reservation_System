package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.BookingDto;
import com.app.entity.Booking;
import com.app.entity.Hotel;
import com.app.entity.User;
import com.app.repository.BookingRepository;
import com.app.repository.HotelRepository;
import com.app.repository.UserRepository;
@Service
public class IBookingService implements BookingService {
    @Autowired
    BookingRepository bookingRepository;
    
    @Autowired
    HotelRepository hotelRepository;
    
    @Autowired
    UserRepository userRepository;
    
    @Autowired
    private ModelMapper mapper;
	@Override
	public List<Booking> getBooking() {
		
		return bookingRepository.findAll();
	}
	@Override
	public List<BookingDto> getAllBookings() {
		List<Booking> bookingList=bookingRepository.findAll();
		
		
		//List<Hotel> hotelList=hotelRepository.findAll();
		//List<User> userList=userRepository.findAll();
		
		List<BookingDto> bookingDtoList=new ArrayList<BookingDto>();
		
		
		
		for(Booking item:bookingList) {
			BookingDto bookingDto=mapper.map(item,BookingDto.class);
			
			bookingDto.setBookingId(item.getBookingid());
		
		bookingDto.setHotelname(item.getHotel().getHotelname());
		bookingDto.setUsername(item.getUser().getUsername());
		
		bookingDtoList.add(bookingDto);
		}
		
		
		
		return bookingDtoList;
	}
          
	
}

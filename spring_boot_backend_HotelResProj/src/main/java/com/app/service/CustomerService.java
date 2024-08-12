package com.app.service;

import com.app.dto.CustomerBookingDto;

public interface CustomerService {
 
	CustomerBookingDto getById(Long id);
}

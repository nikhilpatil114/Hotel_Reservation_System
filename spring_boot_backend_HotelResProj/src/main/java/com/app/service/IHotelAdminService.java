package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.HotelDto;
import com.app.entity.Hotel;
import com.app.entity.Location;
import com.app.entity.Room;
import com.app.repository.HotelRepository;
import com.app.repository.LocationRepository;
import com.app.repository.RoomRepository;

@Service
@Transactional
public class IHotelAdminService implements HotelAdminService {

    @Autowired
    private HotelRepository hotelRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private LocationRepository locationRepository;

    @Autowired
    private ModelMapper modelMapper;

//    @Override
//    public List<HotelDto> getAllHotels() {
//        List<Hotel> hotels = hotelRepository.findAll();
//        List<HotelDto> hotelDtos = new ArrayList<HotelDto>();
//
//        for (Hotel hotel : hotels) {
//            // Directly map Hotel to HotelDto without additional null checks
//            HotelDto hotelDto = modelMapper.map(hotel, HotelDto.class);
//
//            // Assuming getRoom() and getLocation() are not null
//            hotelDto.setRoomtype(hotel.getRoom().getRoomtype());
//            hotelDto.setPricepernight(hotel.getRoom().getPricepernight());
//            hotelDto.setAvailabilitystatus(hotel.getRoom().getAvailabilitystatus());
//            hotelDto.setCity(hotel.getLocation().getCity());
//            hotelDto.setState(hotel.getLocation().getState());
//
//            // Add to list
//            hotelDtos.add(hotelDto);
//        }
//
//        return hotelDtos;
//    }
    @Override
    public List<HotelDto> getAllHotels() {
        List<Hotel> hotels = hotelRepository.findAll();
        return hotels.stream()
                .map(hotel -> {
                    HotelDto hotelDto = modelMapper.map(hotel, HotelDto.class);
                    hotelDto.setRoomtype(hotel.getRoom().getRoomtype());
                    hotelDto.setAvailabilitystatus(hotel.getRoom().getAvailabilitystatus());
                    hotelDto.setPricepernight(hotel.getRoom().getPricepernight());
                    hotelDto.setCity(hotel.getLocation().getCity());
                    hotelDto.setState(hotel.getLocation().getState());
                    return hotelDto;
                })
                .collect(Collectors.toList());
    }

    @Override
    public HotelDto getHotelById(Long hotelId) {
        Optional<Hotel> hotelOpt = hotelRepository.findById(hotelId);
        if (hotelOpt.isPresent()) {
            Hotel hotel = hotelOpt.get();
            HotelDto hotelDto = modelMapper.map(hotel, HotelDto.class);
            hotelDto.setRoomtype(hotel.getRoom().getRoomtype());
            hotelDto.setPricepernight(hotel.getRoom().getPricepernight());
            hotelDto.setCity(hotel.getLocation().getCity());
            hotelDto.setState(hotel.getLocation().getState());
            hotelDto.setAvailabilitystatus(hotel.getRoom().getAvailabilitystatus());

            return hotelDto;
        }
        return null; // Handle not found case as needed
    }

//    @Override
//    public HotelDto addHotel(HotelDto hotelDto) {
//        // Convert DTO to entity for Location
//        Location location = new Location();
//        location.setCity(hotelDto.getCity());
//        location.setState(hotelDto.getState());
//        Location savedLocation = locationRepository.save(location);
//
//        // Convert DTO to entity for Room
//        Room room = new Room();
//        room.setRoomtype(hotelDto.getRoomtype());
//        room.setPricepernight(hotelDto.getPricepernight());
//        room.setAvailabilitystatus(hotelDto.getAvailabilitystatus());
//        Room savedRoom = roomRepository.save(room);
//
//        // Convert DTO to entity for Hotel
//        Hotel hotel = new Hotel();
//        hotel.setHotelname(hotelDto.getHotelname());
//        hotel.setLocation(savedLocation);
//        hotel.setRoom(savedRoom);
//        Hotel savedHotel = hotelRepository.save(hotel);
//
//        // Update DTO with saved entities
//        hotelDto.setHotelid(savedHotel.getHotelid());
//        return hotelDto;
//    }
    
    @Override
    public HotelDto addHotel(HotelDto hotelDto) {
        // Add Location
        Location location = modelMapper.map(hotelDto, Location.class);
        Location savedLocation = locationRepository.save(location);

        // Add Room
        Room room = modelMapper.map(hotelDto, Room.class);
        Room savedRoom = roomRepository.save(room);

        // Add Hotel
        Hotel hotel = modelMapper.map(hotelDto, Hotel.class);
        hotel.setHotelname(hotelDto.getHotelname());
        hotel.setLocation(savedLocation);   
        hotel.setRoom(savedRoom);
        Hotel savedHotel = hotelRepository.save(hotel);

        // Update DTO with saved entities
        hotelDto.setHotelid(savedHotel.getHotelid());
        return hotelDto;
    }

    @Override
    public HotelDto updateHotel(Long hotelId, HotelDto hotelDto) {
        Optional<Hotel> hotelOpt = hotelRepository.findById(hotelId);
        if (hotelOpt.isPresent()) {
            Hotel existingHotel = hotelOpt.get();
            existingHotel.setHotelname(hotelDto.getHotelname());

            // Update Location
            Location location = existingHotel.getLocation();
            //location.setCity(hotelDto.getCity());
            location.setState(hotelDto.getState());
            locationRepository.save(location);
            
            // Update Room
            Room room = existingHotel.getRoom();
            room.setRoomtype(hotelDto.getRoomtype());
            room.setPricepernight(hotelDto.getPricepernight());
            room.setAvailabilitystatus(hotelDto.getAvailabilitystatus());
            roomRepository.save(room);

            // Save the updated hotel
            Hotel updatedHotel = hotelRepository.save(existingHotel);

            return modelMapper.map(updatedHotel, HotelDto.class);
        }
        return null; // Handle not found case as needed
    }

    @Override
    @Transactional
    public void deleteHotel(Long hotelId) {
         Optional<Hotel> hotelOptional = hotelRepository.findById(hotelId);
        if (hotelOptional.isPresent()) {
            Hotel hotel = hotelOptional.get();

            // Delete the associated room
            if (hotel.getRoom() != null) {
                roomRepository.deleteById(hotel.getRoom().getRoomid());
            }

            // Delete the associated location
            if (hotel.getLocation() != null) {
                locationRepository.deleteByCity(hotel.getLocation().getCity());
            }

            // Delete the hotel itself
            hotelRepository.deleteById(hotelId);
        } else {
            throw new RuntimeException("Hotel not found with id: " + hotelId);
        }
    }
}

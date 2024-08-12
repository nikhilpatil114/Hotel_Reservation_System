package com.app.repository;

import com.app.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationRepository extends JpaRepository<Location, String> {
    List<Location> findAll();

	void deleteByCity(String city);
}

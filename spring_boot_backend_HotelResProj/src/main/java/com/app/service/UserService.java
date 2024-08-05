package com.app.service;


import com.app.entity.User;

public interface UserService {
    User findByEmail(String email);
    User save(User user);
}

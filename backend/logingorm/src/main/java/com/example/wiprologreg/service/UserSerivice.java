package com.example.wiprologreg.service;

import org.springframework.stereotype.Service;

import com.example.wiprologreg.exception.UserAlreadyRegisterException;
import com.example.wiprologreg.model.User;

@Service
public interface UserSerivice {

	public User saveUser(User user) throws UserAlreadyRegisterException;
	public User findByEmailAndPassword(String email,String password); 
	public User findByEmailAndSecurityQuestionAndSecurityAnswer(String email, String securityQuestion, String securityAnswer);
	public User resetPassword(User user);
	public User updateUser(User user);
	public void deleteUser(String user);

}



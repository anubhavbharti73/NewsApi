package com.example.wiprologreg.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.wiprologreg.exception.AdminAlreadyRegisterException;
import com.example.wiprologreg.model.Admin;
import com.example.wiprologreg.model.User;

@Service
public interface AdminService {

	public Admin saveAdmin(Admin admin) throws AdminAlreadyRegisterException;
	public Admin findByEmailAndSecurityQuestionAndSecurityAnswer(String email, String securityQuestion,String securityAnswer);
	public Admin findByEmailAndPassword(String email, String password);
	public Admin resetPassword(Admin admin);
	public List<User> getAllUser(); 

	
	
}



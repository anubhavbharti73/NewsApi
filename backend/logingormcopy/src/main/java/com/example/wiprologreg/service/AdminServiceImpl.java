package com.example.wiprologreg.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.wiprologreg.dao.AdminDao;
import com.example.wiprologreg.dao.UserDao;
import com.example.wiprologreg.exception.AdminAlreadyRegisterException;
import com.example.wiprologreg.exception.UserAlreadyRegisterException;
import com.example.wiprologreg.model.Admin;
import com.example.wiprologreg.model.User;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	AdminDao adminDao;
	
	public Admin saveAdmin(Admin admin) throws AdminAlreadyRegisterException
	{
		Admin foundAdmin=findById(admin.getEmail());
		
		if(foundAdmin!=null) {
			throw new AdminAlreadyRegisterException();
		}
		
		return adminDao.save(admin);
		
	}

	public Admin findByEmailAndPassword(String email,String password)
	{
		return adminDao.findByEmailAndPassword(email, password);
	}
	
	public Admin findByEmailAndSecurityQuestionAndSecurityAnswer(String email, String securityQuestion, String securityAnswer) {
		
		return adminDao.findByEmailAndSecurityQuestionAndSecurityAnswer(email, securityQuestion,securityAnswer);
	}
	
	public Admin findById(String email) {
		
		Optional<Admin> optUser= adminDao.findById(email);
		
		if(optUser.isPresent()) {
			return optUser.get();
		}
		else return null;
	}
	
public Admin resetPassword(Admin admin) {
		
		Admin oldData=findById(admin.getEmail());
		oldData.setPassword(admin.getPassword());
		
		return adminDao.save(oldData);
	}
	
	
}




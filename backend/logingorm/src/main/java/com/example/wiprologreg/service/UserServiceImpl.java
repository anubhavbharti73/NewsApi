package com.example.wiprologreg.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.wiprologreg.dao.UserDao;
import com.example.wiprologreg.exception.UserAlreadyRegisterException;
import com.example.wiprologreg.model.User;

@Service
public class UserServiceImpl implements UserSerivice{

	@Autowired
	UserDao userDao;
	
	public User saveUser(User user) throws UserAlreadyRegisterException
	{
		User foundUser=findById(user.getEmail());
		
		if(foundUser!=null) {
			throw new UserAlreadyRegisterException();
		}
		
		return userDao.save(user);
		
	}

	public User findByEmailAndPassword(String email,String password)
	{
		return userDao.findByEmailAndPassword(email, password);
	}
	
	public User findByEmailAndSecurityQuestionAndSecurityAnswer(String email, String securityQuestion, String securityAnswer) {
		
		return userDao.findByEmailAndSecurityQuestionAndSecurityAnswer(email, securityQuestion,securityAnswer);
	}
	
	public User findById(String email) {
		
		Optional<User> optUser= userDao.findById(email);
		
		if(optUser.isPresent()) {
			return optUser.get();
		}
		else return null;
	}
	public User resetPassword(User user) {
		
		User oldData=findById(user.getEmail());
		oldData.setPassword(user.getPassword());
		
		return userDao.save(oldData);
	}
	
	public User updateUser(User user) {
		return userDao.save(user);
	}

	public void deleteUser(String user) {
		userDao.deleteById(user);
	}

}




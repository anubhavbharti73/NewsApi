package com.example.wiprologreg.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.wiprologreg.model.User;

@Repository
public interface UserDao extends MongoRepository<User, String> {

	public User findByEmailAndPassword(String email,String password); 
	public User findByEmailAndSecurityQuestionAndSecurityAnswer(String email, String securityQuestion, String securityAnswer);
//	@Query('find({"email": ema})')
//	public User resterPassword(String email, String password);

}



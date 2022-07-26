package com.example.wiprologreg.dao;

	import org.springframework.data.mongodb.repository.MongoRepository;
	import org.springframework.data.mongodb.repository.Query;
	import org.springframework.stereotype.Repository;

import com.example.wiprologreg.model.Admin;
import com.example.wiprologreg.model.User;

@Repository
public interface AdminDao extends MongoRepository<Admin, String> {

		public Admin findByEmailAndPassword(String email,String password); 
		public Admin findByEmailAndSecurityQuestionAndSecurityAnswer(String email, String securityQuestion, String securityAnswer);
//		@Query('find({"adminIdentifier": adminIdentifier})')
//		public User resterPassword(String adminIdentifier, String adminPassword);

	}



package com.example.wiprologreg.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.wiprologreg.model.Feedback;

@Repository
public interface FeedbackDao extends MongoRepository<Feedback,Integer> {
	
	public void deleteByEmail(String email);

}

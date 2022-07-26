package com.example.wiprologreg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.wiprologreg.dao.FeedbackDao;
import com.example.wiprologreg.model.Feedback;

@Service
public class FeedbackServiceImpl implements FeedbackService {

	@Autowired
	 FeedbackDao feedbackDao;
	
	
	public Feedback saveFeed(Feedback feedback) {
		return feedbackDao.save(feedback);
	}
	public List<Feedback> getAllFeedback(){
		return feedbackDao.findAll();
	}
	
	
	@Override
	public void deleteFeedback(String email) {
		feedbackDao.deleteByEmail(email);		
	}
}

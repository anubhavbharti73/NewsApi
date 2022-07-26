package com.example.wiprologreg.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.wiprologreg.model.Feedback;

@Service
public interface FeedbackService {

	public Feedback saveFeed(Feedback feedback);
	public List<Feedback> getAllFeedback();
	public void deleteFeedback(String email);

}

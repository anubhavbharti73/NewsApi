package com.example.wiprologreg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.wiprologreg.model.Feedback;
import com.example.wiprologreg.service.FeedbackService;

@CrossOrigin
@RestController
@RequestMapping("feed")
public class FeedbackController {
	
	@Autowired
	FeedbackService feedbackService;
	
	@PostMapping
	public ResponseEntity<Feedback> saveFeed(@RequestBody Feedback feedback){
		return new ResponseEntity<Feedback>(feedbackService.saveFeed(feedback),HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<Feedback>> getAllFeeds(){
		return new ResponseEntity<List<Feedback>>(feedbackService.getAllFeedback(),HttpStatus.OK);
	}
	
	@DeleteMapping("/{email}")
	public ResponseEntity<String> deleteFeed(@PathVariable String email){
		feedbackService.deleteFeedback(email);
		return new ResponseEntity<String>("Deleted",HttpStatus.OK);
	}

}


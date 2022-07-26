package com.example.wiprologreg.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Feedback {

	String email;
	String name;
	String feed;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getFeed() {
		return feed;
	}
	public void setFeed(String feed) {
		this.feed = feed;
	}
	@Override
	public String toString() {
		return "Feedback [email=" + email + ", name=" + name + ", feed=" + feed + "]";
	}
	public Feedback(String email, String name, String feed) {
		super();
		this.email = email;
		this.name = name;
		this.feed = feed;
	}
	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}

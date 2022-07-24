package com.example.wiprologreg.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Admin {

	
	//@NotBlank(message = "Please enter your Name")
	String name;
	@Id
	String email;
	//@NotBlank(message = "Please enter your adminPassword")
	String password;
	String securityQuestion;
	String securityAnswer;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getSecurityQuestion() {
		return securityQuestion;
	}
	public void setSecurityQuestion(String securityQuestion) {
		this.securityQuestion = securityQuestion;
	}
	public String getSecurityAnswer() {
		return securityAnswer;
	}
	public void setSecurityAnswer(String securityAnswer) {
		this.securityAnswer = securityAnswer;
	}
	@Override
	public String toString() {
		return "Admin [name=" + name + ", email=" + email + ", password=" + password + ", securityQuestion="
				+ securityQuestion + ", securityAnswer=" + securityAnswer + "]";
	}
	public Admin(String name, String email, String password, String securityQuestion, String securityAnswer) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.securityQuestion = securityQuestion;
		this.securityAnswer = securityAnswer;
	}
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}
	


}




package com.example.wiprologreg.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Admin {

	
	//@NotBlank(message = "Please enter your Name")
	String adminName;
	
	//@NotBlank(message = "Please enter your adminIdentifier")
	//@Size(min = 5, max=5, message = "Please Enter Correct AdminIdentifier")
	@Id
	String email;
	//@NotBlank(message = "Please enter your adminPassword")
	String adminPassword;
	String securityQuestion;
	String securityAnswer;
	public String getAdminName() {
		return adminName;
	}
	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAdminPassword() {
		return adminPassword;
	}
	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
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
		return "Admin [adminName=" + adminName + ", email=" + email + ", adminPassword=" + adminPassword
				+ ", securityQuestion=" + securityQuestion + ", securityAnswer=" + securityAnswer + "]";
	}
	public Admin(String adminName, String email, String adminPassword, String securityQuestion, String securityAnswer) {
		super();
		this.adminName = adminName;
		this.email = email;
		this.adminPassword = adminPassword;
		this.securityQuestion = securityQuestion;
		this.securityAnswer = securityAnswer;
	}
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}


}




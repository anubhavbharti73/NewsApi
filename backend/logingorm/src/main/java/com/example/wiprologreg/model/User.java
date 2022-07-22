package com.example.wiprologreg.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User {

	String name;
	@Id
	String email;
	String pic;
	
	public User(String name, String email, String pic, String password, String securityQuestion, String securityAnswer,
			String address, long contact, Date dob, String gender) {
		super();
		this.name = name;
		this.email = email;
		this.pic = pic;
		this.password = password;
		this.securityQuestion = securityQuestion;
		this.securityAnswer = securityAnswer;
		this.address = address;
		this.contact = contact;
		this.dob = dob;
		this.gender = gender;
	}
	public String getPic() {
		return pic;
	}
	public void setPic(String pic) {
		this.pic = pic;
	}
	String password;
	String securityQuestion;
	String securityAnswer;
	String address;
	long contact;
	Date dob;
	String gender;
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public long getContact() {
		return contact;
	}
	public void setContact(long contact) {
		this.contact = contact;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}	


public User() {
		super();
		// TODO Auto-generated constructor stub
	}
@Override
public String toString() {
	return "User [name=" + name + ", email=" + email + ", pic=" + pic + ", password=" + password + ", securityQuestion="
			+ securityQuestion + ", securityAnswer=" + securityAnswer + ", address=" + address + ", contact=" + contact
			+ ", dob=" + dob + ", gender=" + gender + "]";
}


}




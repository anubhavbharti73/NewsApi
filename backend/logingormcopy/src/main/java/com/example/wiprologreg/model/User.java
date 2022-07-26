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
	String password;
	String securityQuestion;
	String securityAnswer;
	String address;
	long contact;
	int walletmoney;
	Date date;
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
	public String getPic() {
		return pic;
	}
	public void setPic(String pic) {
		this.pic = pic;
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
	public int getWalletmoney() {
		return walletmoney;
	}
	public void setWalletmoney(int walletmoney) {
		this.walletmoney = walletmoney;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	@Override
	public String toString() {
		return "User [name=" + name + ", email=" + email + ", pic=" + pic + ", password=" + password
				+ ", securityQuestion=" + securityQuestion + ", securityAnswer=" + securityAnswer + ", address="
				+ address + ", contact=" + contact + ", walletmoney=" + walletmoney + ", date=" + date + ", gender="
				+ gender + "]";
	}
	public User(String name, String email, String pic, String password, String securityQuestion, String securityAnswer,
			String address, long contact, int walletmoney, Date date, String gender) {
		super();
		this.name = name;
		this.email = email;
		this.pic = pic;
		this.password = password;
		this.securityQuestion = securityQuestion;
		this.securityAnswer = securityAnswer;
		this.address = address;
		this.contact = contact;
		this.walletmoney = walletmoney;
		this.date = date;
		this.gender = gender;
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
package com.example.wiprologreg.model;

public class UserAuth {

	
	String email;
	String password;
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
	
	public UserAuth() {
		// TODO Auto-generated constructor stub
	}
	public UserAuth(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	@Override
	public String toString() {
		return "UserAuth [email=" + email + ", password=" + password + "]";
	}
	
}

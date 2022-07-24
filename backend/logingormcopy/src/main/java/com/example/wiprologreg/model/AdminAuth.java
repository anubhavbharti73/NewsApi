package com.example.wiprologreg.model;

public class AdminAuth {

	
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

	@Override
	public String toString() {
		return "AdminAuth [email=" + email + ", password=" + password + "]";
	}

	public AdminAuth(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public AdminAuth() {
		super();
		// TODO Auto-generated constructor stub
	}

	
}

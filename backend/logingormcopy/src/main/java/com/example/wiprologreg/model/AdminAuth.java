package com.example.wiprologreg.model;

public class AdminAuth {

	
	String email;
	
	String adminPassword;

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

	@Override
	public String toString() {
		return "AdminAuth [email=" + email + ", adminPassword=" + adminPassword + "]";
	}

	public AdminAuth(String email, String adminPassword) {
		super();
		this.email = email;
		this.adminPassword = adminPassword;
	}

	public AdminAuth() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}

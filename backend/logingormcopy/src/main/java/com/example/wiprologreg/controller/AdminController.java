package com.example.wiprologreg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.wiprologreg.exception.AdminAlreadyRegisterException;
import com.example.wiprologreg.model.Admin;
import com.example.wiprologreg.model.AdminAuth;
import com.example.wiprologreg.model.User;
import com.example.wiprologreg.service.AdminService;

@RestController
@RequestMapping("admin")
@CrossOrigin
public class AdminController {

	@Autowired
	AdminService adminService;
	
	@PostMapping 
	public ResponseEntity<Admin> saveAdmin(@RequestBody Admin admin) throws AdminAlreadyRegisterException
	{
		Admin savedAdmin= adminService.saveAdmin(admin); 
		return new ResponseEntity<Admin>(savedAdmin,HttpStatus.OK);
		
	}
	@PostMapping("/login") 
	public ResponseEntity<Admin> login(@RequestBody AdminAuth adminAuth)
	{
		Admin savedAdmin= adminService.findByEmailAndPassword(adminAuth.getEmail(), adminAuth.getPassword());
		return new ResponseEntity<Admin>(savedAdmin,HttpStatus.OK);
		
	}
	
	@GetMapping("/{email}/{securityQuestion}/{securityAnswer}")
	public ResponseEntity<Admin> forgotPassword(@PathVariable String email,@PathVariable String securityQuestion,@PathVariable String securityAnswer){
		Admin forgotData=adminService.findByEmailAndSecurityQuestionAndSecurityAnswer(email, securityQuestion,securityAnswer);
		return new ResponseEntity<Admin>(forgotData,HttpStatus.OK);
	}
	
	@PutMapping("reset")
	public ResponseEntity<Admin> resetPassword(@RequestBody Admin admin){
		Admin adminUpdated = adminService.resetPassword(admin);
		return new ResponseEntity<Admin>(adminUpdated,HttpStatus.OK);
	}
	
}

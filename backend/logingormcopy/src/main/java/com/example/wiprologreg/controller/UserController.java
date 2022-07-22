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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.wiprologreg.exception.UserAlreadyRegisterException;
import com.example.wiprologreg.model.User;
import com.example.wiprologreg.model.UserAuth;
import com.example.wiprologreg.service.UserSerivice;

@RestController
@RequestMapping("users")
@CrossOrigin
public class UserController {

	@Autowired
	UserSerivice userService;
	
	@PostMapping 
	public ResponseEntity<User> saveUser(@RequestBody User user) throws UserAlreadyRegisterException
	{
		User savedUser= userService.saveUser(user); 
		return new ResponseEntity<User>(savedUser,HttpStatus.OK);
		
	}
	@PostMapping("/login") 
	public ResponseEntity<User> login(@RequestBody UserAuth userAuth)
	{
		User savedUser= userService.findByEmailAndPassword(userAuth.getEmail(),userAuth.getPassword());
		return new ResponseEntity<User>(savedUser,HttpStatus.OK);
		
	}
	
	@GetMapping("/{email}/{securityQuestion}/{securityAnswer}")
	public ResponseEntity<User> forgotPassword(@PathVariable String email,@PathVariable String securityQuestion,@PathVariable String securityAnswer){
		User forgotData=userService.findByEmailAndSecurityQuestionAndSecurityAnswer(email, securityQuestion,securityAnswer);
		return new ResponseEntity<User>(forgotData,HttpStatus.OK);
	}
	
	@PutMapping("reset")
	public ResponseEntity<User> resetPassword(@RequestBody User user){
		User userUpdated = userService.resetPassword(user);
		return new ResponseEntity<User>(userUpdated,HttpStatus.OK);
	}
	
	@PutMapping("update")
	public ResponseEntity<User> updateUser(@RequestBody User user){
		return new ResponseEntity<User>(userService.updateUser(user),HttpStatus.OK);
	}
	
	@DeleteMapping("/{user}")
	public ResponseEntity deleteUser(@PathVariable String user){
		userService.deleteUser(user);
		return new ResponseEntity(HttpStatus.OK);
	}
	
	
	
	
}

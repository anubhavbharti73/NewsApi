package com.example.wiprologreg.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@Component
public class UserExceptionHandler {
	
	@ExceptionHandler(value=UserAlreadyRegisterException.class)
	public ResponseEntity<String> userAlreadyRegister(UserAlreadyRegisterException userAlreadyRegisterException){
		return new ResponseEntity<String>("Player Already Registered",HttpStatus.NOT_ACCEPTABLE);
	}

}

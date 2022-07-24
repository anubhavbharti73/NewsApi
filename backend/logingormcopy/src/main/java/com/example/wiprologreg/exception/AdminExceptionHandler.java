package com.example.wiprologreg.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@Component
public class AdminExceptionHandler {
	
	@ExceptionHandler(value=AdminAlreadyRegisterException.class)
	public ResponseEntity<String> adminAlreadyRegister(AdminAlreadyRegisterException adminAlreadyRegisterException){
		return new ResponseEntity<String>("Admin Already Registered",HttpStatus.NOT_ACCEPTABLE);
	}

}

package com.example.favourite.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.favourite.dao.FavDao;
import com.example.favourite.model.FavModel;
import com.example.favourite.service.FavService;

@CrossOrigin
@RestController
@RequestMapping("fav")
public class FavController {

	@Autowired
	FavService favService;
	
	@PostMapping
	public ResponseEntity<FavModel> saveFav(@RequestBody FavModel favModel){
		return new ResponseEntity<FavModel>(favService.saveFavourite(favModel),HttpStatus.OK);
	}
	
	@GetMapping("/{userName}")
	public ResponseEntity<List<FavModel>> showFav(@PathVariable String userName){
		return new ResponseEntity<List<FavModel>>(favService.findByUserName(userName),HttpStatus.OK);
		
	}
	@PostMapping("/del")
	public ResponseEntity<FavModel> deleteByUserNameAndTitle(@RequestBody FavModel favModel){
		return new ResponseEntity<FavModel>(favService.deleteByUserNameAndTitle(favModel.getUserName(),favModel.getTitle()),HttpStatus.OK);
	}
	
	
	
}

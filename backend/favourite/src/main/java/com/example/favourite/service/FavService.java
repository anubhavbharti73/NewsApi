package com.example.favourite.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.favourite.model.FavModel;

@Service
public interface FavService {
	
		public FavModel saveFavourite(FavModel favModel);
		public List<FavModel> findByUserName(String userName);
		public FavModel deleteByUserNameAndTitle(String userName,String title);
		

}

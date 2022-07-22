package com.example.favourite.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.favourite.dao.FavDao;
import com.example.favourite.model.FavModel;

@Service
public class FavServiceImpl implements FavService {

	@Autowired
	FavDao favDao;
	
	
	public FavModel saveFavourite(FavModel favModel) {
		return favDao.save(favModel);
	}
	@Override
	public List<FavModel> findByUserName(String userName) {
		return favDao.findByUserName(userName);
	}
	
	
	@Override
	public FavModel deleteByUserNameAndTitle(String userName,String title) {
		return favDao.deleteByUserNameAndTitle(userName,title);
	}
	
	
	
}



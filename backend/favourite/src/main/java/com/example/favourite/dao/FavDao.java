package com.example.favourite.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.favourite.model.FavModel;
import com.mongodb.lang.Nullable;

@Repository
public interface FavDao extends MongoRepository<FavModel,String> {
	
	public List<FavModel> findByUserName(String userName);
	public FavModel deleteByUserNameAndTitle(String userName,String title);
	
	
}

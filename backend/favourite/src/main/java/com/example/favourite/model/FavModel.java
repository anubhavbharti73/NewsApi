package com.example.favourite.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class FavModel {
				String userName;
			    String url;
			    String urlToImg;
			    String author;
			    String title;
			    String discription;
				public String getUserName() {
					return userName;
				}
				public void setUserName(String userName) {
					this.userName = userName;
				}
				public String getUrl() {
					return url;
				}
				public void setUrl(String url) {
					this.url = url;
				}
				public String getUrlToImg() {
					return urlToImg;
				}
				public void setUrlToImg(String urlToImg) {
					this.urlToImg = urlToImg;
				}
				public String getAuthor() {
					return author;
				}
				public void setAuthor(String author) {
					this.author = author;
				}
				public String getTitle() {
					return title;
				}
				public void setTitle(String title) {
					this.title = title;
				}
				public String getDiscription() {
					return discription;
				}
				public void setDiscription(String discription) {
					this.discription = discription;
				}
				@Override
				public String toString() {
					return "FavModel [userName=" + userName + ", url=" + url + ", urlToImg=" + urlToImg + ", author="
							+ author + ", title=" + title + ", discription=" + discription + "]";
				}
				public FavModel(String userName, String url, String urlToImg, String author, String title,
						String discription) {
					super();
					this.userName = userName;
					this.url = url;
					this.urlToImg = urlToImg;
					this.author = author;
					this.title = title;
					this.discription = discription;
				}
				public FavModel() {
					super();
					// TODO Auto-generated constructor stub
				}
	
			    
			    
}

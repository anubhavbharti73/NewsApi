import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
 

  constructor(private http:HttpClient) { }

  getHeadlines()
{
return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=87229b519983412ba54b0c374de74182');

}

getSportsHeadlines(){

  return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=87229b519983412ba54b0c374de74182')
}

getHealthHeadlines(){

  return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=87229b519983412ba54b0c374de74182')
}

getBusinessHeadlines(){

  return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=87229b519983412ba54b0c374de74182')
}


getCategoryHeadlines(category:string)
{
return this.http.get('https://newsapi.org/v2/top-headlines?country=in&category='+category+'&apiKey=87229b519983412ba54b0c374de74182');

}



getSearchHeadlines(query:string)
{
return this.http.get('https://newsapi.org/v2/everything?q='+query+'&apiKey=87229b519983412ba54b0c374de74182');

}






}

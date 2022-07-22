import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fav } from 'src/fav.model';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  constructor(private http:HttpClient) { }

  addToFav(fav:Fav)
  {
  
  return  this.http.post<Fav>('http://localhost:1225/fav',fav);
  }

  getFavNews(userName:String){
    return this.http.get<Fav[]>(`http://localhost:1225/fav/${userName}`)
  }

  deleteFavNews(userName:string,title:string){
    let fav= new Fav()
    fav.userName=userName
    fav.title=title
        return this.http.post(`http://localhost:1225/fav/del`,fav,{responseType:'text' as 'json'});
  }


  deleteAllFav(username:string){
    return this.http.delete
  }

}


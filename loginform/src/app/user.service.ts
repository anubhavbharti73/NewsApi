import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from 'src/feedback.model';
import { User } from './user.model';
import { UserAuth } from './userAuth.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


registerUser(user:User)
{

return  this.http.post<User>('http://localhost:1224/users',user);
}

getallUser(){
  return this.http.get<User[]>(`http://localhost:1224/admin`);
}


loginUser(userAuth:UserAuth)
{
return  this.http.post<User>('http://localhost:1224/users/login',userAuth);
}

forgotPassword(temp1:string,temp2:string,temp3:string){
  return this.http.get<User>(`http://localhost:1224/users/${temp1}/${temp2}/${temp3}`);
}

resetPassword(user:User){
  return this.http.put('http://localhost:1224/users/reset',user);
}

updateUser(user:User){
  return this.http.put('http://localhost:1224/users/update',user);
}

deleteAcc(username:string){
  return this.http.delete(`http://localhost:1224/users/${username}`);
}


getFeeds(){
  return this.http.get<Feedback[]>('http://localhost:1224/feed')
}

saveFeeds(feedback:Feedback){
  return this.http.post<Feedback>('http://localhost:1224/feed',feedback)
}

deleteFeed(em:string){
  return this.http.delete(`http://localhost:1224/feed/${em}`);
}

}

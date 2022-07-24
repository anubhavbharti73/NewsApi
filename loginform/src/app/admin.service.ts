import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from 'src/admin.model';
import { AdminAuth } from 'src/adminAuth.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http:HttpClient) { }


registerAdmin(admin:Admin)
  {
  
  return  this.http.post<Admin>('http://localhost:1224/admin',admin);
  }
  
  
loginadmin(adminauth:AdminAuth)
{
return  this.http.post<Admin>('http://localhost:1224/admin/login',adminauth);
}
  
adminforgotPassword(temp1:string,temp2:string,temp3:string){
  return this.http.get<Admin>(`http://localhost:1224/admin/${temp1}/${temp2}/${temp3}`);
}
  
adminresetPassword(admin:Admin){
  return this.http.put('http://localhost:1224/admin/reset',admin);
}
  

}

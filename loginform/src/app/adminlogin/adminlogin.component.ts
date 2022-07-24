import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuth } from 'src/adminAuth.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

 
  constructor(private adminsrv:AdminService, private router:Router) { 

    
  }
  adminAuth=new AdminAuth();
  ngOnInit(): void {
    }
  
    AdminloginValidate(regForm:NgForm)
    {
  
      if(regForm.valid)
      {
  
        
  this.adminsrv.loginadmin(this.adminAuth).subscribe(
  
    data=>{
      if(data==null)
      {
      alert('Invalid user name or password ')
      }
      else{
        alert('Welcome to Admin Portal ')
        console.log(data);

       /** let user=new User();
        user=data;

        localStorage.setItem('user',JSON.stringify(user));**/

        this.router.navigate(['/fakewallet',this.adminAuth.email]);
      }
    },
    error=>{
      console.log(error)
    }
    
    )
  
      }
      else
      {
        alert('Enter Valid Details');
      }
  
    }
  
  }
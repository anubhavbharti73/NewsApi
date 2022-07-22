import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { UserAuth } from '../userAuth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private userService:UserService , private router:Router) { 

    
  }
  userAuth=new UserAuth();
  ngOnInit(): void {
    }
  
    loginValidate(regForm:NgForm)
    {
  
      if(regForm.valid)
      {
  
        
  this.userService.loginUser(this.userAuth).subscribe(
  
    data=>{
      if(data==null)
      {
      alert('Invalid user name or password ')
      }
      else{
        alert('Welcome to News Application ')
        console.log(data);

        let user=new User();
        user=data;

        localStorage.setItem('user',JSON.stringify(user));

        this.router.navigate(['/news',this.userAuth.email])
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
  

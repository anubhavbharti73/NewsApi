import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-fakewallet',
  templateUrl: './fakewallet.component.html',
  styleUrls: ['./fakewallet.component.css']
})
export class FakewalletComponent implements OnInit {

  constructor(private router:Router,private userSrv:UserService) { }

  user=new User()
  price=0

  set299(){
    this.price=299;
  }

  set499(){
    this.price=499;
  }

  set999(){
    this.price=999;
  }

  ngOnInit(): void {
    this.email=localStorage.getItem('userEmail')+''
    let user= localStorage.getItem('user')+'';
    this.user=JSON.parse(user);
        console.log('user obj from login');
        console.log(this.user)
  }

  email:string=''
  makePayment(payForm:NgForm){

     
      this.user.walletmoney=this.user.walletmoney+this.price;
      this.userSrv.updateUser(this.user).subscribe(
        data=>{
          alert("Payment Made")      
          localStorage.setItem('user',JSON.stringify(this.user));               
          this.router.navigate(['/login'])
          console.log(this.user)
        },
        error=>{
          console.log(error)
        }
      )
      
     
  } 

}

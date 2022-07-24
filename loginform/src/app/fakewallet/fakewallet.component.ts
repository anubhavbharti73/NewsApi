import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-fakewallet',
  templateUrl: './fakewallet.component.html',
  styleUrls: ['./fakewallet.component.css']
})
export class FakewalletComponent implements OnInit {

  constructor(private router:Router) { }

  user=new User()
  price=0

  set299(){
    this.price=299;
  }

  set499(){
    this.price=499;
  }

  set999(){
    this.price=599;
  }

  ngOnInit(): void {
  }


  makePayment(payForm:NgForm){

     
      this.user.walletmoney=this.user.walletmoney+this.price;
      alert("Payment Made")
      localStorage.setItem('user',JSON.stringify(this.user));               
      this.router.navigate(['/login'])
     
  } 

}

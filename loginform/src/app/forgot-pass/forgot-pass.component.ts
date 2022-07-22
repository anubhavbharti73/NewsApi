import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  user=new User();
  constructor(private userSrv:UserService, private router:Router) { }

  forgotPass(forgotForm:NgForm){

    if(forgotForm.valid){
      this.userSrv.forgotPassword(this.user.email,this.user.securityQuestion,this.user.securityAnswer).subscribe(
        data=>{
          if(data!=null){
            alert("Verifed")
            this.router.navigate(['/reset']);
            localStorage.setItem('email', this.user.email)
          }
          else alert("Not Verified")
        },
        error=>{
          console.log(error)
        }
      )


    }

    else
    alert("Enter Valid Details")

  }
  ngOnInit(): void {
  }

}

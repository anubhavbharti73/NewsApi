import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/admin.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminforgotpass',
  templateUrl: './adminforgotpass.component.html',
  styleUrls: ['./adminforgotpass.component.css']
})
export class AdminforgotpassComponent implements OnInit {

  admin=new Admin();
  constructor(private adminsrv:AdminService, private router:Router) { }

  adminforgotPass(forgotForm:NgForm){

    if(forgotForm.valid){
      this.adminsrv.adminforgotPassword(this.admin.email,this.admin.securityQuestion,this.admin.securityAnswer).subscribe(
        data=>{
          if(data!=null){
            alert("Verifed")
            this.router.navigate(['/adminreset']);
            localStorage.setItem('adminemail', this.admin.email)
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
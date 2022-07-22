import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  user=new User();

  constructor(private userSrv:UserService) { }

  
  ngOnInit(): void {
      this.email=localStorage.getItem('email');
  }
  email:any='';
  

  resetPass(resetForm:NgForm){

    if(this.user.cPassword==this.user.password){
    if(resetForm.valid){
      this.user.email=this.email;
      this.userSrv.resetPassword(this.user).subscribe(
        data=>{
          
            alert("Passoword Changed");
        },
        error=>{
          console.log(error);
        }
      )
    }
    else alert("Enter Valid Details!")
    }
    else alert("Password did not Matched")
  } 

    

}

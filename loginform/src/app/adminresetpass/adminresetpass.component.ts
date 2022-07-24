import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from 'src/admin.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminresetpass',
  templateUrl: './adminresetpass.component.html',
  styleUrls: ['./adminresetpass.component.css']
})
export class AdminresetpassComponent implements OnInit {

  admin=new Admin();

  constructor(private adminSrv:AdminService) { }

  
  ngOnInit(): void {
      this.adminemail=localStorage.getItem('adminemail');
  }
  adminemail:any='';
  

  adminresetPass(resetForm:NgForm){

    if(this.admin.cPassword==this.admin.password){
    if(resetForm.valid){
      this.admin.email=this.adminemail;
      this.adminSrv.adminresetPassword(this.admin).subscribe(
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

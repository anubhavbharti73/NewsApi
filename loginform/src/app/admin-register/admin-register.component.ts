import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/admin.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  constructor(private adminService:AdminService, private router:Router) { }
  check=''
  admin=new Admin();

  status='Password isnt same'
  ngOnInit(): void {
  }


  checkMe(){
    this.check=""
  }

  registerMe(regForm:NgForm)
  { this.check=''

console.log(this.admin);
if(this.admin.password==this.admin.cPassword){
if(regForm.valid)
{
  

this.adminService.registerAdmin(this.admin).subscribe(

data=>{
  alert('admin Registered')
  this.router.navigate(['/adminlogin'])
},
error=>{
  alert("Admin Already Register try another Email or Login")
  this.check="Already Registered"
}

)

}
else alert('Enter Mandatory Details')
}
else
{
  alert('Password and Confirm Password is Not Same');
}



  }
}

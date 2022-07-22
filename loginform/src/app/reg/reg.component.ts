import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  constructor(private userService:UserService, private router:Router) { }

  check=''
  user=new User();

  status='Password isnt same'
  ngOnInit(): void {
  }

mypic='';


  uploadPic(fileIn:any)
  {

    let rdr=new FileReader();

  rdr.onload=(e:any)=>{
      let image=new Image();
      image.src=e.target.result;

      image.onload=rs=>{
        this.mypic=e.target.result;
      }
    };

    rdr.readAsDataURL(fileIn.target.files[0])
  }

  checkMe(){
    this.check=""
  }

  registerMe(regForm:NgForm)
  { this.check=''
  this.user.pic=this.mypic
console.log(this.user);
if(this.user.password==this.user.cPassword){
if(regForm.valid)
{
  

this.userService.registerUser(this.user).subscribe(

data=>{
  alert('User Registered')

},
error=>{
  alert("User Already Register try another Email or Login")
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



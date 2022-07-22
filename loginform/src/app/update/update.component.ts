import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FavService } from '../fav.service';
import { NewsService } from '../news.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private userSrv:UserService, private actRoute:ActivatedRoute) { }

  

  ngOnInit(): void {

    let user= localStorage.getItem('user')+'';
this.user=JSON.parse(user);

    console.log('user obj from login');
    console.log(this.user)

    this.actRoute.params.subscribe(
      data=>{
        this.email=data['userId']
      },
      error=>{
        console.log(error)
      }
    )

  }
  email:any=''
  user=new User();

  //new method
  //reads the image from user and assigns it to mypic
  uploadPic(fileIn:any)
  {

    let rdr=new FileReader();

  rdr.onload=(e:any)=>{
      let image=new Image();
      image.src=e.target.result;

      image.onload=rs=>{
        this.mypic=e.target.result;
        this.user.pic=e.target.result
      }
    };

    rdr.readAsDataURL(fileIn.target.files[0])
  }
  mypic=this.user.pic
 
  
  updateMe(regForm:NgForm){

    
if(this.user.password==this.user.cPassword){
    this.user.pic=this.mypic
    this.user.email=this.email

    this.userSrv.updateUser(this.user).subscribe(
      data=>{
        alert("Data Updated")
      },
      error=>{
        console.log(error)
      }
    )

  }
  else alert("Password And Confirm Password is not Same")
}

}

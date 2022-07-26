import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Feedback } from 'src/feedback.model';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { UserAuth } from '../userAuth.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private userDrv:UserService, private router:Router) { }

  ngOnInit(): void {

    let user= localStorage.getItem('user')+'';
this.user=JSON.parse(user);

  
  }
  feedback=new Feedback()


  user=new User()

  sendFeed(regForm:NgForm){

    this.feedback.email=this.user.email;
    this.feedback.name=this.user.name

    this.userDrv.saveFeeds(this.feedback).subscribe(
      data=>{
        alert("Feedback Sent")
        if(this.user.walletmoney==0)
        this.router.navigate(['/n-news', this.user.email])
        else
        this.router.navigate(['/news',this.user.email])
      },
      error=>{
        console.log(error)
      }
    )


  }

}

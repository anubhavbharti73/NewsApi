import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/feedback.model';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private userSer:UserService,private router:Router) { }
  
  user:User[]=[];

  ngOnInit(): void {

    this.userSer.getallUser().subscribe(
      data=>{
        this.user=data;
      },
      error=>{
        console.log(error)
      }

    )
  
  }

  showTable=0
  showFeed=0
  showUsers(){
    this.showTable=1;
    this.showFeed=0;
  }

  feed=new Feedback()
  feeds:Feedback[]=[]
  showFeedback(){
    this.showTable=0;
    this.showFeed=1;
    this.userSer.getFeeds().subscribe(
      data=>{

        this.feeds=data
        console.log(data)

      },
      error=>{
        console.log(error)
      }
      
    )

  }

  deleteFeed(feedback:Feedback){

    let em=feedback.email
    
    this.userSer.deleteFeed(em).subscribe(
      data=>{
        
      },
      error=>{
        console.log(error)
      }
    )
    this.router.navigate(['/admindesk'])

  }
  removeAccess(user:User){

    user.date=""
    user.walletmoney=0
    this.userSer.updateUser(user).subscribe(
      data=>{

      },
      error=>{
        console.log(error)
      }
    )
    this.router.navigate(['/admindesk'])

  }
  
    



}

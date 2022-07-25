import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private userSer:UserService) { }
  
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
  
    



}

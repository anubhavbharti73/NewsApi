import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/Article.model';
import { NewsService } from '../news.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nonpremium',
  templateUrl: './nonpremium.component.html',
  styleUrls: ['./nonpremium.component.css']
})
export class NonpremiumComponent implements OnInit {

 
  constructor(private actRoute:ActivatedRoute,private news:NewsService,private router:Router, private userSrv:UserService) { }
  username=''
  user=new User()


ngOnInit(): void {

  let user= localStorage.getItem('user')+'';
this.user=JSON.parse(user);

  this.getNewsHeadLInes();
  this.actRoute.params.subscribe(
    data=>{
      this.username=data['userId']
    },
    error=>{
      console.log(error)
    }
  )
}


articles:Article[]=[];
article=new Article();


getNewsHeadLInes(){

  this.news.getHeadlines().subscribe(
data=>{

let news= JSON.parse(JSON.stringify(data));

this.articles=[];
for(let i=0; i<6;i++ )
{
let article=new Article();
article.author=news.articles[i].author;
article.description=news.articles[i].description;
article.title=news.articles[i].title;
article.url=news.articles[i].url; 
article.urlToImage=news.articles[i].urlToImage;
this.articles.push(article);
}


},
error=>{
console.log(error)
}

  )
}

delAcount(){
  this.userSrv.deleteAcc(this.username).subscribe(
    data=>{
     
      alert("User Deleted")
      this.router.navigate(['/login'])
    },
    error=>{
      console.log(error)
    }
  )
  
}

upgrade(){
  localStorage.setItem('user',JSON.stringify(this.user));
  this.router.navigate(['/wallet']) 
  console.log("nonP "+this.user)
}

}
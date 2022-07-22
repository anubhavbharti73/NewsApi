import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/Article.model';
import { Fav } from 'src/fav.model';
import { FavService } from '../fav.service';
import { NewsService } from '../news.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private favSrv:FavService,private actRoute:ActivatedRoute,private news:NewsService,private router:Router, private userSrv:UserService) { }

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
  this.change=1
  this.changeFav=0
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
  fav= new Fav();
  favs:Fav[]=[];
  category=''
  
  getCategoryNewsHeadLInes()
  {
    this.change=1;
    this.changeFav=0

    this.news.getCategoryHeadlines(this.category).subscribe(
data=>{
  let news= JSON.parse(JSON.stringify(data));

 this.articles=[];
 for(let i=0; i<5 ;i++ )
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

search=''

searchNewsHeadLInes()
{ 
  this.changeFav=0
  this.change=1;
  this.news.getSearchHeadlines(this.search).subscribe(
data=>{

let news= JSON.parse(JSON.stringify(data));


this.articles=[];
for(let i=0; i<5;i++ )
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

backHome(){
  this.router.navigate(['/login'])
}

getSportsNewsHeadLInes(){
  this.changeFav=0
  this.change=1;
  this.news.getSportsHeadlines().subscribe(
    data=>{
      let news= JSON.parse(JSON.stringify(data));
    
     this.articles=[];
     for(let i=0; i<5 ;i++ )
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

      
getHealthNewsHeadLInes(){
 this.changeFav=0
 this.change=1;
  this.news.getHealthHeadlines().subscribe(
    data=>{
      let news= JSON.parse(JSON.stringify(data));
    
     this.articles=[];
     for(let i=0; i<5 ;i++ )
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

getBusinessNewsHeadLInes(){
  this.changeFav=0
  this.change=1;
  this.news.getBusinessHeadlines().subscribe(
    data=>{
      let news= JSON.parse(JSON.stringify(data));
    
     this.articles=[];
     for(let i=0; i<5 ;i++ )
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
      
      addToFav(article:Article){
       // this.favs.push(this.username,article.author,article.description,article.title,article.url,article.urlToImage);
      
       this.fav.userName=this.username;
       this.fav.author=article.author;
       this.fav.discription=article.description;
       this.fav.title=article.title;
       this.fav.url=article.url;
       this.fav.urlToImg=article.urlToImage;
       this.favs.push(this.fav);

      //  console.log(fav);
        this.favSrv.addToFav(this.fav).subscribe(
          data=>{
            alert("Added to Fav")
          },
          error=>{
            console.log(error)
          }
        )

      }
      changeFav=1
       change=1;
      getMyFavourite(){
        this.changeFav=1;
        this.change=0;
        this.favSrv.getFavNews(this.username).subscribe(
          data=>{
            this.favs=data
          },
          error=>{
            console.log(error)
          }
        )
      }

      deleteFav(fav:Fav){
        this.favSrv.deleteFavNews(this.username,fav.title).subscribe(
          data=>{
           
            this.getMyFavourite()
          },
          error=>{
            console.log(error);
            
          }
        )
      }


      editProfile(){
        this.router.navigate(['/update',this.username]);
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
        // this.favSrv.deleteAllFav(this.username).subscribe(
        //   data=>{

        //   },
        //   error={
        //     console.log(error)
        //   }
        // )
      }
      

}




 
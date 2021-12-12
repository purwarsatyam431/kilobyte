import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { Blogpost } from '../blogpost';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  styleUrls: ['./blogpost-featured.component.css']
})
export class BlogpostFeaturedComponent implements OnInit {

  constructor(private blogpost:BlogpostService, private titleService:Title) { }
  blogs;
  error;
  title:"jdhd";
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
   this.fetchData()
  }
  fetchData(){
    this.blogpost.blogFeatureList().pipe(map(responseData=>{
     // console.log(responseData);
     const empArray=[]
      for(const key in responseData){
        //console.log(responseData[key])
  //      console.warn(responseData.hasOwnProperty(key))
        if(responseData.hasOwnProperty(key)){
        empArray.push({userId:key,...responseData[key]})
      }
      }
      return empArray
    })).subscribe((d)=>this.blogs=d,((error)=>{this.error=error
    console.log(error)
    }))
  }


}

import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Blogpost } from '../blogpost'; 
import { BlogpostService } from '../blogpost.service';
@Component({
  selector: 'app-blogpost-recent',
  templateUrl: './blogpost-recent.component.html',
  styleUrls: ['./blogpost-recent.component.css']
})
export class BlogpostRecentComponent implements OnInit {
  blogs;
  error;

  constructor(private blogpostService: BlogpostService) { }

  ngOnInit() {
this.fetchData()
  }
  fetchData(){
    this.blogpostService.getRecentBlog().pipe(map(responseData=>{
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
    })).subscribe((d)=>this.blogs=d,((error)=>{
      this.error=error
    console.log(error)
    }))
  }
}
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BlogpostService } from '../blogpost.service';
import {Blogpost} from '../blogpost'
import { map } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
title="Blogs";
blogs;
error;
  constructor(private titleService:Title,
    private blogpostService:BlogpostService, public rt:Router) { }

  ngOnInit(): void {
this.titleService.setTitle(this.title);
this.fetchData()
}
  fetchData(){
    this.blogpostService.blogList().pipe(map(responseData=>{
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
fun(id){
  this.rt.navigate(['/blog', id])
}
}

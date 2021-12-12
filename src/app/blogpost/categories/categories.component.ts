import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { BlogpostService } from '../blogpost.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories;
  error: {};

  constructor(private blogpostService: BlogpostService) { }

  ngOnInit() {
  this.fetchData()
  }

  fetchData(){
    this.blogpostService.getCategories().pipe(map(responseData=>{
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
    })).subscribe((d)=>this.categories=d,((error)=>{
      this.error=error
    console.log(error)
    }))
  }
}
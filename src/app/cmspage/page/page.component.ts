import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CmspageService } from '../cmspage.service';
import { Router ,ActivatedRoute,ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
about;
error;
title="About-us";
  constructor(private service:CmspageService, private titl:Title, private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
this.titl.setTitle(this.title)
    this.fetchData()
}
fetchData(){
  this.service.get().pipe(map(responseData=>{
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
  })).subscribe((d)=>this.about=d,((error)=>{this.error=error
  console.log(error)
  }))
}

}

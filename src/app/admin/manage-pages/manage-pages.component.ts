import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { CmspageService } from 'src/app/cmspage/cmspage.service';
import { Contact } from 'src/app/cmspage/contact';
import { Page } from 'src/app/cmspage/page';

@Component({
  selector: 'app-manage-pages',
  templateUrl: './manage-pages.component.html',
  styleUrls: ['./manage-pages.component.css']
})
export class ManagePagesComponent implements OnInit {
about;
contacts;
editAbout:Page=new Page();
editAboutIndex;

  constructor(private service:CmspageService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.service.get().subscribe((response)=>
    // this.about=response
    // );
    // this.service.getContact().subscribe((response)=>
    // this.contacts=response)
this.fetchData()
this.fetchData2()

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
    })).subscribe((d)=>this.about=d,((error)=>{console.log(error)}))
  }
  fetchData2(){
    this.service.getContact().pipe(map(responseData=>{
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
    })).subscribe((d)=>this.contacts=d,((error)=>{console.log(error)}))
  }


  onEditPage(i){
    this.service.getAbout(i).subscribe((d)=>{
      this.editAbout.id=d.id;
      this.editAbout.title=d.title;
      this.editAbout.desc=d.desc;
      this.editAbout.image=d.image;
  
    })
    this.editAboutIndex=i;
  }
onEditConfirm(){
this.service.updateAboutUs(this.editAboutIndex,this.editAbout).subscribe((response)=>{
  this.editAbout=response
console.log(response)
this.fetchData()
  // var updates=new Page();
  // updates.id=response.id;
  // updates.title=response.title;
  // updates.desc=response.desc;
  // updates.image=response.image;
  // this.about[this.editAboutIndex]=updates
})
}
selectImg(e){
  if(e.target.files){
    var reader=new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload=(event:any)=>{
       this.editAbout.image=event.target.result;
    }
      }
}
}

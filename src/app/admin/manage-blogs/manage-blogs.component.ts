import { Component, OnInit,Inject } from '@angular/core';
import { BlogpostService } from 'src/app/blogpost/blogpost.service';
import {MatDialog} from '@angular/material/dialog'
import { Blogpost } from 'src/app/blogpost/blogpost';
import { findIndex, map } from 'rxjs/operators';

@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.css']
})

export class ManageBlogsComponent implements OnInit {

  constructor(private blogpost:BlogpostService , public dialog:MatDialog) { }

datas;
newBlog:Blogpost=new Blogpost();
editBlog=new Blogpost();
editBlogIndex;
deleteBlog=new Blogpost();
deleteBlogIndex:number=null;
  ngOnInit(): void {
this.fetchData()
  }
  fetchData(){
    this.blogpost.blogList().pipe(map(responseData=>{
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
    })).subscribe((d)=>this.datas=d,((error)=>{
    console.log(error)
    }))
  }
onSaveClick(){
this.blogpost.postBlog(this.newBlog).subscribe((response)=>{
  this.fetchData()
//  this.newBlog=response;
  // this.newBlog.id=response.id;
  // this.newBlog.title=response.title;
  // this.newBlog.short_desc=response.short_desc;
  // this.newBlog.image=response.image;
  // this.newBlog.created_at=response.created_at;
  // this.newBlog.author=response.author;
  // this.datas.push(this.newBlog);
})
}
onEditClick(i){
  console.log(i)
  this.blogpost.getBlog(i).subscribe((d)=>{
    this.editBlog.id=d.id;
    this.editBlog.title=d.title;
    this.editBlog.short_desc=d.short_desc;
    this.editBlog.image=d.image;
    this.editBlog.created_at=d.created_at;
    this.editBlog.author=d.author;

  })
  this.editBlogIndex=i;    
}
onEditUpdate(){
  this.blogpost.updateBlog(this.editBlogIndex,this.editBlog).subscribe((response:Blogpost)=>{
    this.fetchData()
    console.log(response)
    // var update:Blogpost=new Blogpost();
    // update.id=response.id;
    // update.title=response.title;
    // update.short_desc=response.short_desc;
    // update.image=response.image;
    // update.author=response.author;
    // update.created_at=response.created_at;
    // this.datas[this.editBlogIndex]=update;

  })
}
onDelete(i){
  this.blogpost.getBlog(i).subscribe((d)=>{ 
    this.deleteBlog.id=d.id;
    this.deleteBlog.title=d.title;
    this.deleteBlog.short_desc=d.short_desc;
    this.deleteBlog.image=d.image;
    this.deleteBlog.created_at=d.created_at;
    this.deleteBlog.author=d.author;

  })
  this.deleteBlogIndex=i;
}
onDeleteConfirm(){
  this.blogpost.deleteBlog(this.deleteBlogIndex).subscribe((r)=>{
console.log(r)
this.fetchData()    
  })
}
url="assets/blog3.jpg"

onSelectFile(e:any){
  if(e.target.files){
var reader=new FileReader();
reader.readAsDataURL(e.target.files[0])
reader.onload=(event:any)=>{
   this.editBlog.image=event.target.result;
}
  }
} 
selectImg(e){
  if(e.target.files){
    var reader=new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload=(event:any)=>{
       this.newBlog.image=event.target.result;
    }
      }
}
}

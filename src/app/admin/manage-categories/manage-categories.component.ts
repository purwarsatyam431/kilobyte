import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { BlogpostService } from 'src/app/blogpost/blogpost.service';
import { Category } from 'src/app/blogpost/category';
@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {
categoryName;
new_Category=new Category();
editCategory=new Category();
editCategoryIndex;
deleteCategory=new Category();
deleteCategoryIndex;

constructor(private blogpost:BlogpostService, private route:ActivatedRoute) { }

  ngOnInit(): void {
this.fetchData()
  }

  fetchData(){
    this.blogpost.getCategories().pipe(map(responseData=>{
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
    })).subscribe((d)=>this.categoryName=d,((error)=>{
    console.log(error)
    }))
  }


onSave(){
  this.blogpost.postCategory(this.new_Category).subscribe((response)=>{
    // this.new_Category=response;
    // this.new_Category.id=response.id;
    // this.new_Category.name=response.name;
    // this.categoryName.push(this.new_Category);
    console.log(response.userId)
    this.fetchData()
  })
}
onEditCategory(id){
 this.blogpost.getPerticularCategory(id).subscribe((d)=>
 {
  this.editCategory.name=d.name
//  console.log(d)
 }
 )
console.log(id)
this.editCategoryIndex=id
}
onEditConfirm(){
  this.blogpost.updateCategory(this.editCategoryIndex,this.editCategory).subscribe((response)=>{
   this.fetchData()
    console.log(response)
    console.log(this.editCategoryIndex)
    // var updateCategories=new Category();
    // updateCategories.id=response.id;
    // updateCategories.name=response.name;
    // this.categoryName[this.editCategoryIndex]=updateCategories
  })
}
onDeleteCategory(id){
  this.blogpost.getPerticularCategory(id).subscribe((d)=>
  {
   this.deleteCategory.name=d.name
 //  console.log(d)
  }
  )
  this.deleteCategoryIndex=id;


}
onDeleteConfirm(){
  this.blogpost.deleteCategory(this.deleteCategoryIndex).subscribe((e)=>{
  console.log(e)
  this.fetchData()
    // this.categoryName.splice(this.deleteCategoryIndex,1)
  })
}
}

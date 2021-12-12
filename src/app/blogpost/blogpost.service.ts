import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Blogpost} from './blogpost';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from './category';


@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  firebaseUrl="https://blogpost-fb5ef-default-rtdb.firebaseio.com"
url="http://localhost:3000/blog-list";
feature_url="http://localhost:3000/blog-feature";
category_url="http://localhost:3000/category";
errorData={};
  constructor(private http:HttpClient) { }

  blogList():Observable<Blogpost[]>{
    return this.http.get<Blogpost[]>(this.firebaseUrl+'/blog-list.json',{responseType:"json"}).pipe(
      catchError(this.handleError)
    );
  }


  blogFeatureList():Observable<Blogpost>{
    return this.http.get<Blogpost>(this.firebaseUrl+'/blog-feature.json',{responseType:"json"}).pipe(catchError(this.handleError))
  }

  getBlog(ID:any):Observable<Blogpost> {
    return this.http.get<Blogpost>(this.firebaseUrl+'/blog-list/'+ID+'.json')
    .pipe(
      catchError(this.handleError)
    );
}


getRecentBlog():Observable<Blogpost> {
  return this.http.get<Blogpost>(this.firebaseUrl+'/blog-list.json',{responseType:"json"})
  .pipe(
    catchError(this.handleError)
  );
}

getCategories():Observable<Category> {
  return this.http.get<Category>(this.firebaseUrl+'/category.json',{responseType:"json"}).pipe(
    catchError(this.handleError)
  );
}
//category
postCategory(newCategory:Category):Observable<Category>{
  return this.http.post<Category>(this.firebaseUrl+'/category.json/',newCategory,{responseType:"json"})
}
getPerticularCategory(userId:string):Observable<Category>{
    return this.http.get<Category>(this.firebaseUrl+'/category/'+userId+'.json')
}



updateCategory(id,editCategory:Category):Observable<Category>
{
return this.http.put<Category>(this.firebaseUrl+'/category/'+id+'.json',editCategory,{responseType:"json"})
}
deleteCategory(id:any):Observable<string>{
  return this.http.delete<string>(this.firebaseUrl+'/category/'+id+'.json')
}


postBlog(newBlog:Blogpost):Observable<Blogpost>{
  return this.http.post<Blogpost>(this.firebaseUrl+'/blog-list.json/',newBlog,{responseType:"json"}).pipe(
    catchError(this.handleError)
    );
}
updateBlog(userid:string,editBlog:Blogpost):Observable<Blogpost>{
  return this.http.put<Blogpost>(this.firebaseUrl+'/blog-list/'+userid+'.json',editBlog,{responseType:"json"})
}


deleteBlog(id:any):Observable<string>{
  return this.http.delete<string>(this.firebaseUrl+"/blog-list/"+id+'.json')
}


  private handleError(error: HttpErrorResponse) {
    // if (error.error instanceof ErrorEvent) {

     

    //   console.error('An error occurred:', error.error.message);
    // } else {

     
    //   console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    // }

    

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  
}

}

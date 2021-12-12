import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Page } from './page'; 

import { catchError } from 'rxjs/operators';
import { Contact } from './contact';
@Injectable({
  providedIn: 'root'
})
export class CmspageService {
  firebaseUrl="https://blogpost-fb5ef-default-rtdb.firebaseio.com"
about_Url="http://localhost:3000/about";
contact_Url="http://localhost:3000/contact";
errorData;
  constructor(private http:HttpClient) { }
  /*getAbout(slug:string):Observable<Page>{
   return this.http.get<Page>(this.about_Url+'/'+slug).pipe(
     catchError(this.handleError)
   );
  }*/

  get():Observable<Page>{
    return this.http.get<Page>(this.firebaseUrl+'/about.json',{responseType:'json'}).pipe(
      catchError(this.handleError)
    )
  }
  getAbout(ID:any):Observable<Page> {
    return this.http.get<Page>(this.firebaseUrl+'/about/'+ID+'.json')
    .pipe(
      catchError(this.handleError)
    );
}

updateAboutUs(userId:string,editAbout:Page):Observable<Page>{
return this.http.put<Page>(this.firebaseUrl+'/about/'+userId+'.json',editAbout,{responseType:"json"})
}


getContact():Observable<Contact>{
  return  this.http.get<Contact>(this.firebaseUrl+'/contact.json',{responseType:"json"});
}


postForm(formData):Observable<Contact>{
  return this.http.post<Contact>(this.firebaseUrl+'/contact.json/',formData,{responseType:"json"}).pipe(
    catchError(this.handleError)
  )
}


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

     

      console.error('An error occurred:', error.error.message);
    } else {

     
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  
}

}

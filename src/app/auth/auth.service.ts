import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Auths } from './auths';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  login_Url = 'http://localhost:3000/login';
  errorData;

  constructor(private http: HttpClient) { }

  get():Observable<Auths>{
return   this.http.get<Auths>(this.login_Url,{responseType:"json"})
  }

  login(username: string, password: string) {
    return this.http.post<Auths>(this.login_Url, {username,password})
    .pipe(catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
  // return an observable with a user-facing error message
  this.errorData = {
    errorTitle: 'Oops! Request for document failed',
    errorDesc: 'Something bad happened. Please try again later.'
  };
  return throwError(this.errorData);
}
}
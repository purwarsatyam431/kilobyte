import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogpost } from '../blogpost/blogpost';
import { Viewblogs } from './manage-blogs/viewblogs';

@Injectable({
  providedIn: 'root'
})
export class BlogviewService {
url="http://localhost:3000/blogs-list"
  constructor(private http:HttpClient) { }
  getblogs():Observable<Blogpost>{
    return this.http.get<Blogpost>(this.url,{responseType:"json"})
  }
}

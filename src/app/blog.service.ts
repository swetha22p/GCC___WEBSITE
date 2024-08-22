import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

 
  private apiUrl = 'https://ang-backend.onrender.com/api/blogs';


  constructor(private http: HttpClient) { }
  addBlog(title: string, link: string): Observable<any> {
    return this.http.post(this.apiUrl, { title, link });
  }
  getBlogs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  deleteBlog(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}


  

  

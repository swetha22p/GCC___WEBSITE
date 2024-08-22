import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Ensure Observable is imported

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  private apiUrl = 'https://ang-backend.onrender.com/api/projects'; // Ensure the endpoint matches

  constructor(private http: HttpClient) { }

  addProject(title: string, link: string): Observable<any> {
    return this.http.post(this.apiUrl, { title, link });
  }

  getProjects(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteProject(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}

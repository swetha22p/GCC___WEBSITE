import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { BlogService } from '../blog.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postblogs',
  standalone: true,
  templateUrl: './postblogs.component.html',
  styleUrls: ['./postblogs.component.css'],
  imports: [FormsModule]  // Add FormsModule here
})
export class PostblogsComponent {
  title: string = '';
  link: string = '';

  constructor(private blogService: BlogService) { }

  onclick(): void {
    this.blogService.addBlog(this.title, this.link).subscribe(
      response => {
        console.log('Blog added:', response);
        this.title = '';
        this.link = '';
      },
      error => {
        console.error('Error adding blog:', error);
      }
    );
  }
}

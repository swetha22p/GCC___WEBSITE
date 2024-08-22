import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../blog.service';
import { Blog } from '../models/BlogModel'; // Adjust the import path as necessary
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  
  blogs: Blog[] = []; // Array to hold all blogs
  searchTerm: string = ''; // Property to hold the search term
  
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(
      (data: Blog[]) => {
        this.blogs = data;
      },
      error => {
        console.error('Error fetching blogs', error);
      }
    );
  }

  // Method to filter blogs based on the search term
  filteredBlogs(): Blog[] {
    return this.blogs.filter(blog =>
      blog.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  deleteBlog(id: string): void {
    if (confirm('Are you sure you want to delete this blog?')) {
      this.blogService.deleteBlog(id).subscribe(
        () => {
          this.blogs = this.blogs.filter(blog => blog._id !== id);
        },
        error => {
          console.error('Error deleting blog', error);
        }
      );
    }
  }

  viewBlog(link: string): void {
    window.open(link, '_blank');
  }
}

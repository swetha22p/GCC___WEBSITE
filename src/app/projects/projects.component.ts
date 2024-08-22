import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../project-service.service'; // Ensure correct path
import { Project } from '../models/BlogModel'; // Adjust path as necessary
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  projects: Project[] = []; // Array to hold all projects
  searchTerm: string = ''; // Property to hold the search term
  
  constructor(private projectService: ProjectServiceService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(
      (data: Project[]) => {
        this.projects = data;
      },
      error => {
        console.error('Error fetching projects', error);
      }
    );
  }

  // Method to filter projects based on the search term
  filteredProjects(): Project[] {
    return this.projects.filter(project =>
      project.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteProject(id: string): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(id).subscribe(
        () => {
          this.projects = this.projects.filter(project => project._id !== id);
        },
        error => {
          console.error('Error deleting project', error);
        }
      );
    }
  }

  viewProject(link: string): void {
    window.open(link, '_blank');
  }
}

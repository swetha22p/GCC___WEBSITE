import { Component } from '@angular/core';
import { ProjectServiceService } from '../project-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postprojects',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './postprojects.component.html',
  styleUrls: ['./postprojects.component.css']
})
export class PostprojectsComponent {
  title: string = '';
  link: string = '';

  constructor(private projectService: ProjectServiceService) { }

  onclick(): void {
    this.projectService.addProject(this.title, this.link).subscribe(
      response => {
        console.log('Project added:', response);
        this.title = '';
        this.link = '';
      },
      error => {
        console.error('Error adding project:', error);
      }
    );
  }
}

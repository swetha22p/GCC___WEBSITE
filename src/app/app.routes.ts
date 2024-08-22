import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PostblogsComponent } from './postblogs/postblogs.component';
import { PostprojectsComponent } from './postprojects/postprojects.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'blogs', component: BlogsComponent },
    // { path: 'events', component: EventsComponent },
    { path: 'contact', component: ContactComponent },
    {path: 'postprojects',component: PostprojectsComponent},
    {path: 'postblogs' , component: PostblogsComponent},
    { path: '', redirectTo: '/about', pathMatch: 'full' },  // Default route
    { path: '**', redirectTo: '/about' }  // Wildcard route
  ];

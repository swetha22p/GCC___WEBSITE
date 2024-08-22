import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  bg="/images/bg3-removebg-preview.png"
  activities = [
    {
      title: 'Workshops & Events',
      description: 'We host regular workshops, webinars, and coding challenges, covering a wide range of topics from web development to AI and beyond.'
    },
    {
      title: 'Mentorship Programs',
      description: 'Connect with experienced mentors who can guide you on your coding journey, provide career advice, and help you achieve your goals.'
    },
    {
      title: 'Open Source Projects',
      description: 'Join our open-source initiatives to contribute to meaningful projects, learn from others, and showcase your skills.'
    },
    {
      title: 'Community Support',
      description: 'Engage with our global community through forums, chat groups, and virtual meetups. Share your knowledge, ask questions, and collaborate on projects.'
    }
  ];

}

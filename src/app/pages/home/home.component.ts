import { Component } from '@angular/core';

interface Project {
  id: number | string;
  title: string;
  description: string;
  image: string;
}

interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  aboutMe: string = 'I am a passionate developer with experience in building web applications using modern technologies. I love to learn and take on new challenges.';
  
  projects: Project[] = [
    { id: 1, title: 'Portfolio Website', description: 'A personal website to showcase my work and skills.', image: 'assets/todo.png' },
    { id: 2, title: 'E-commerce App', description: 'A full-featured e-commerce application with Angular and Node.js.', image: 'assets/todo.png' },
    { id: 3, title: 'Blog Platform', description: 'A blogging platform with user authentication and markdown support.', image: 'assets/todo.png' }
  ];

  experience: string[] = [
    'Frontend Developer at TechCorp (2022 - Present)',
    'Web Developer Intern at Webify (2021 - 2022)',
    'Freelance Web Designer (2019 - 2021)'
  ];

  skills: string[] = [
    'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'MongoDB', 'Git'
  ];

  contactEmail: string = 'your.email@example.com';

  socialLinks: SocialLinks = {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
    website: 'https://yourwebsite.com'
  };
}

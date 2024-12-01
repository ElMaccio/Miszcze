import { Component } from '@angular/core';
import {ProjectDetails} from '../../shared/interfaces/project-details';
import {ProjectCardComponent} from './project-card/project-card.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-animated-projects-scroller',
  standalone: true,
  imports: [
    ProjectCardComponent,
    NgForOf
  ],
  templateUrl: './animated-projects-scroller.component.html',
  styleUrl: './animated-projects-scroller.component.css'
})
export class AnimatedProjectsScrollerComponent {
  projects : ProjectDetails[] = [
    // After changing project image src delete <link rel="preconnect" href="https://picsum.photos"> from src/index.html
    { Name: "Project 1", Description: "Project 1 description", Image: "https://picsum.photos/400/200", Status: "in progress" },
    { Name: "Project 2", Description: "Project 2 description", Image: "https://picsum.photos/400/200", Status: "in progress" },
    { Name: "Project 3", Description: "Project 3 description", Image: "https://picsum.photos/400/200", Status: "in progress" },
    { Name: "Project 4", Description: "Project 4 description", Image: "https://picsum.photos/400/200", Status: "in progress" },
    { Name: "Project 5", Description: "Project 5 description", Image: "https://picsum.photos/400/200", Status: "in progress" }
  ]
}

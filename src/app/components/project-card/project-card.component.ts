import { Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  standalone: true,
})
export class ProjectCardComponent {
  @Input() project!: { name: string, description: string };
}

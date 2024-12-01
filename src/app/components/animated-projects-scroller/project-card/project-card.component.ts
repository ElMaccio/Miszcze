import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ProjectDetails} from '../../../shared/interfaces/project-details';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project! : ProjectDetails;
}

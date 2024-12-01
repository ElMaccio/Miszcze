import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ProjectDetails} from '../../../shared/interfaces/project-details';
import {NgOptimizedImage} from '@angular/common';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 2,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f5edf0',
      })),
      state('closed', style({
        opacity: 0.8,
      })),
      transition('* => closed', [
        animate('0.5s')
      ]),
      transition('* => open', [
        animate('0.25s')
      ]),
    ])
  ]
})
export class ProjectCardComponent {
  @Input() project! : ProjectDetails;
    isHover = false;

    toggleBoxHover(state: boolean) {
      this.isHover = state;
    }
}

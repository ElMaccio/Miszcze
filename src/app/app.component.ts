import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {RouterOutlet} from '@angular/router';
import {ProjectCardComponent} from './components/project-card/project-card.component';
import {NgForOf} from '@angular/common';
import {HorizontalScrollComponent} from './components/horizontal-scroll/horizontal-scroll.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    RouterOutlet,
    ProjectCardComponent,
    NgForOf,
    HorizontalScrollComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Miszcze';
  projects: {name: string, description: string}[] = [
    {name: 'Projekt 1', description: 'Longer description of the project 1. Description of the project 1.'},
    {name: 'Projekt 2', description: 'Longer description of the project 2. Description of the project 2.'},
    {name: 'Projekt 3', description: 'Longer description of the project 3. Description of the project 3.'},
    {name: 'Projekt 4', description: 'Longer description of the project 4. Description of the project 4.'},
    {name: 'Projekt 5', description: 'Longer description of the project 5. Description of the project 5.'},
    {name: 'Projekt 6', description: 'Longer description of the project 6. Description of the project 6.'},
    {name: 'Projekt 7', description: 'Longer description of the project 7. Description of the project 7.'},
    {name: 'Projekt 8', description: 'Longer description of the project 8. Description of the project 8.'},
    {name: 'Projekt 9', description: 'Longer description of the project 9. Description of the project 9.'},
    {name: 'Projekt 10', description: 'Longer description of the project 10. Description of the project 10.'}
  ];
}

import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {HeroComponent} from '../../components/hero/hero.component';
import {HorizontalScrollComponent} from '../../components/horizontal-scroll/horizontal-scroll.component';
import {NgForOf} from '@angular/common';
import {ProjectCardComponent} from '../../components/project-card/project-card.component';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeaderComponent,
    HeroComponent,
    HorizontalScrollComponent,
    NgForOf,
    ProjectCardComponent,
    FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
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
  ];
}

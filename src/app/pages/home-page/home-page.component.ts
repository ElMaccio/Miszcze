import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {HeroComponent} from '../../components/hero/hero.component';
import {HorizontalScrollComponent} from '../../components/horizontal-scroll/horizontal-scroll.component';
import {NgForOf} from '@angular/common';
import {ProjectCardComponent} from '../../components/cards/project-card/project-card.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {OpinionCardComponent} from '../../components/cards/opinion-card/opinion-card.component';
import {Opinion} from '../../shared/interfaces/cards/opinion';
import {PreloaderComponent} from '../../components/preloader/preloader.component';
import {gsap} from 'gsap';
import {Project} from '../../shared/interfaces/cards/project';
import {Skill} from '../../shared/interfaces/cards/skill';
import {SkillCardComponent} from '../../components/cards/skill-card/skill-card.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeaderComponent,
    HeroComponent,
    HorizontalScrollComponent,
    NgForOf,
    ProjectCardComponent,
    FooterComponent,
    PreloaderComponent,
    SkillCardComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  @ViewChild('preloaderComponent') preloaderComponent!: ElementRef;

  // Set id to specific elements to be able to scroll to them
  // After clicking on the navigation link
  // id should be like name to lower case plus 'Section' (e.g. portfolioSection)
  options: { name: string, active: boolean}[] = [
    {name: "Portfolio", active: true},
    {name: "Projects", active: false},
    {name: "Opinions", active: false},
  ];

  projects: Project[] = [
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

  skills: Skill[] = [
    {
      logoSrc: '/favicon.ico',
      title: 'C++',
      description: 'Great for system-level programming, performance-critical applications, and algorithmic problem-solving.',
      date: '2021-05-01'
    },
    {
      logoSrc: '/favicon.ico',
      title: 'Python',
      description: 'Ideal for machine learning, data analysis, automation, and backend development.',
      date: '2021-05-01'
    },
    {
      logoSrc: '/favicon.ico',
      title: 'Web Development',
      description: 'We specialize in full-stack web development, creating dynamic and responsive websites.',
      date: '2021-05-01'
    },
    {
      logoSrc: '/favicon.ico',
      title: 'Graphics Programming',
      description: 'Explored OpenGL and SDL2 for graphics projects and game engine development.',
      date: '2021-05-01'
    }
  ]
}

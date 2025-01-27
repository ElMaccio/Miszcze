import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {HeroComponent} from '../../components/hero/hero.component';
import {HorizontalScrollComponent} from '../../components/horizontal-scroll/horizontal-scroll.component';
import {NgForOf} from '@angular/common';
import {ProjectCardComponent} from '../../components/project-card/project-card.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {OpinionCardComponent} from '../../components/opinion-card/opinion-card.component';
import {Opinion} from '../../shared/interfaces/opinion';
import {PreloaderComponent} from '../../components/preloader/preloader.component';
import {gsap} from 'gsap';

@Component({
  selector: 'app-home-page',
  imports: [
    HeaderComponent,
    HeroComponent,
    HorizontalScrollComponent,
    NgForOf,
    ProjectCardComponent,
    FooterComponent,
    OpinionCardComponent,
    PreloaderComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements AfterViewInit{
  @ViewChild('preloaderComponent') preloaderComponent!: ElementRef;

  // Set id to specific elements to be able to scroll to them
  // After clicking on the navigation link
  // id should be like name to lower case plus 'Section' (e.g. portfolioSection)
  options: { name: string, active: boolean}[] = [
    {name: "Portfolio", active: true},
    {name: "Projects", active: false},
    {name: "Opinions", active: false},
  ];

  projects: { name: string, description: string }[] = [
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

  opinions: Opinion[] = [
    {
      logoSrc: '/favicon.ico',
      clientName: 'C++',
      opinion: 'Great for system-level programming, performance-critical applications, and algorithmic problem-solving.',
      date: '2021-05-01',
      stars: 1
    },
    {
      logoSrc: '/favicon.ico',
      clientName: 'Python',
      opinion: 'Ideal for machine learning, data analysis, automation, and backend development.',
      date: '2021-05-01',
      stars: 1
    },
    {
      logoSrc: '/favicon.ico',
      clientName: 'Web Development',
      opinion: 'We specialize in full-stack web development, creating dynamic and responsive websites.',
      date: '2021-05-01',
      stars: 1
    },
    {
      logoSrc: '/favicon.ico',
      clientName: 'Graphics Programming',
      opinion: 'Explored OpenGL and SDL2 for graphics projects and game engine development.',
      date: '2021-05-01',
      stars: 1
    }
  ]

  ngAfterViewInit() {
    // Initialize GSAP timeline
    // let tl = gsap.timeline();
    //
    // tl.to(this.preloaderComponent.nativeElement, {
    //   y: '-100%',
    //   duration: 1,
    // }).to(this.preloaderComponent.nativeElement, {
    //   y: '0%',
    //   duration: 1,
    // })
  }
}

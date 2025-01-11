import {AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  animations: [
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('hidden => visible', [
        animate('1s')
      ])
    ]),
    trigger('slideIn', [
      state('hidden', style({
        transform: 'translateY(100px)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('hidden => visible', [
        animate('1s')
      ])
    ])
  ]
})
export class ProjectCardComponent implements AfterViewInit{
  @Input() project!: {name: string, description: string};
  @ViewChild('projectCard') projectCard!: ElementRef;
  state = 'hidden';

  ngAfterViewInit() {
    // It will show the card if it is already in the viewport
    // For testing purposes, you can comment this line
    // this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = this.projectCard.nativeElement;
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        this.state = 'visible';
      }
    }
  }
}

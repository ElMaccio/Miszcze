import {AfterViewInit, Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  standalone: true,
  animations: [
    trigger('fade', [
      state('void', style({
        opacity: 0,
        transform: 'scale(0.2)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition("void => visible", [
        animate(1500)
      ])
    ])
  ]
})
export class HeroComponent implements AfterViewInit{
  animationState = 'void';

  ngAfterViewInit() {
    this.animationState = 'visible';
  }
}

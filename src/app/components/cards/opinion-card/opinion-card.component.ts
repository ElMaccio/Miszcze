import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Opinion} from '../../../shared/interfaces/cards/opinion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-opinion-card',
  imports: [],
  templateUrl: './opinion-card.component.html',
  styleUrl: './opinion-card.component.css'
})
export class OpinionCardComponent implements AfterViewInit{
  @Input() opinion!: Opinion;
  @ViewChild('opinionCard', {static: true}) card!: ElementRef;

  ngAfterViewInit() {
    const anim = gsap.from(this.card.nativeElement,
      {
        y: 50,
        opacity: 0,
        paused: true,
      }
    )

    ScrollTrigger.create({
      trigger: this.card.nativeElement,
      start: 'top 80%',
      onEnter: () => anim.play()
    });

    ScrollTrigger.create({
      trigger: this.card.nativeElement,
      start: "top bottom",
      onLeaveBack: () => anim.pause(0)
    })
  }

  getStringStars(): string {
    return '⭐'.repeat(this.opinion.stars);
  }
}

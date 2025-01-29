import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {Skill} from '../../../shared/interfaces/cards/skill';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent implements AfterViewInit {
  @Input() skill!: Skill;
  @ViewChild('skillCard', {static: true}) card!: ElementRef;

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
}

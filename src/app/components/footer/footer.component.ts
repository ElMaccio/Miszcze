import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit{
  @ViewChild('footer', {static: true}) card!: ElementRef;

  ngAfterViewInit() {
    const anim = gsap.from(this.card.nativeElement,
      {
        y: 100,
        paused: true,
        duration: 1
      }
    )

    ScrollTrigger.create({
      trigger: this.card.nativeElement,
      start: 'top bottom',
      onEnter: () => anim.play()
    });

    ScrollTrigger.create({
      trigger: this.card.nativeElement,
      start: "top bottom",
      onLeaveBack: () => anim.reverse()
    })
  }
}

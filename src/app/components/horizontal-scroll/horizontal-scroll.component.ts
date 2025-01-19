import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-horizontal-scroll',
  imports: [],
  templateUrl: './horizontal-scroll.component.html',
  styleUrl: './horizontal-scroll.component.css'
})
export class HorizontalScrollComponent implements AfterViewInit {
  @ViewChild('scroll') scroller!: ElementRef;
  @ViewChild('container') container!: ElementRef;
  @ViewChild('content') content!: ElementRef;

  ngAfterViewInit() {
    let sections: ElementRef[] = Array.from(this.content.nativeElement.children);
    sections = gsap.utils.toArray(sections);

    let snaps: number[] = [];
    sections.forEach((section, i: number) => {
      snaps.push(i / (sections.length - 1));
    });

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: this.container.nativeElement,
        scroller: this.scroller.nativeElement,
        pin: true,
        start: "top top",
        scrub: 1,
        snap: {
          snapTo: (position: number): number => {
            return snaps.reduce((prev: number, curr: number): number => {
              return (Math.abs(curr - position) < Math.abs(prev - position) ? curr : prev);
            });
          },

          duration: 0.3,
          delay: 0.1,
          ease: "power1.inOut"
        },
        end: () => {
          console.log("+=" + (window.innerWidth * 3.5));
          return "+=" + (window.innerWidth * 3.5);
        }
      }
    });
  }
}

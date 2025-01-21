import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {gsap} from 'gsap';

@Component({
  selector: 'app-preloader',
  imports: [],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css'
})
export class PreloaderComponent implements AfterViewInit {
  @ViewChild('preloader') preloader!: ElementRef;
  @ViewChild('logoSpin') logoSpin!: ElementRef;

  ngAfterViewInit(): void {
    gsap.to(this.preloader.nativeElement, {
      y: '-100%',
      duration: 1.2,
      delay: 0.6,
      ease : 'power2.inOut',
      onStart: () => {
        gsap.to(this.logoSpin.nativeElement, {
          rotate: 360,
          duration: 0.7,
          repeat: 1,
          ease: 'power2.in',
        });
      }
    });
  }
}

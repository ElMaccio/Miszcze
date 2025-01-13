import {AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NgOptimizedImage} from '@angular/common';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-project-card',
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  standalone: true,
})
export class ProjectCardComponent {
  @Input() project!: { name: string, description: string };
}

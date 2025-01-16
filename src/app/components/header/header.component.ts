import {AfterViewInit, Component, HostListener} from '@angular/core';
import {NgForOf} from '@angular/common';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {elementAt} from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    NgForOf
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('fade', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(-100%)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition("void => visible", [
        animate(1500)
      ])
    ])
  ]
})
export class HeaderComponent implements AfterViewInit {
  animationState = 'void';
  options: { name: string, active: boolean, position: number }[] = [
    {name: "Portfolio", active: true, position: 60},
    {name: "Team", active: false, position: 290},
    {name: "Projects", active: false, position: 680}
  ]

  themeIcon: HTMLElement | null = null;

  ngAfterViewInit(): void {
    this.themeIcon = document.getElementById('theme-icon');

    if (this.themeIcon) {  // Check if the icon is found
      // Apply the theme based on localStorage or system preference
      if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
        this.themeIcon.classList.remove('fa-moon-o');
        this.themeIcon.classList.add('fa-circle-o'); // Dark mode icon
      } else {
        document.documentElement.classList.remove('dark');
        this.themeIcon.classList.remove('fa-circle-o');
        this.themeIcon.classList.add('fa-moon-o'); // Light mode icon
      }
    }
    this.animationState = 'visible';
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.options.forEach(element => {
      if (element.position < scrollTop) {
        this.changeContent(element.name, false);
      }
    });
  }

  changeContent(name: string, scroll = true) {
    this.options.forEach(element => {
      element.active = element.name == name;
      if (element.active && scroll) {
        window.scrollTo({top: element.position, behavior: "smooth"});
      }
    });
  }

  toggleTheme() {
    // Toggle the theme class and update the icon
    document.documentElement.classList.toggle('dark');

    if (document.documentElement.classList.contains('dark')) {
      if (this.themeIcon) {
        this.themeIcon.classList.remove('fa-moon-o');
        this.themeIcon.classList.add('fa-circle-o');
      }
      localStorage.setItem('theme', 'dark');
    } else {
      if (this.themeIcon) {
        this.themeIcon.classList.remove('fa-circle-o');
        this.themeIcon.classList.add('fa-moon-o');
      }
      localStorage.setItem('theme', 'light');
    }
  }
}

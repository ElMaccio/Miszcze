import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NgForOf} from '@angular/common';
import {gsap} from 'gsap';

@Component({
  selector: 'app-header',
  imports: [
    NgForOf
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterViewInit {
  @Input() options!: { name: string, active: boolean, position?: number}[];
  @ViewChild('header') header!: ElementRef;

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

    gsap.from(this.header.nativeElement, {
      y: '-100%',
      opacity: 0,
      duration: 1.5,
      delay: 1.2
    })

    this.observeSections();
  }

  changeContent(name: string, scroll = true) {
    this.options.forEach(element => {
      element.active = element.name == name;
      if (element.active && scroll) {
        const targetElement = document.getElementById(name.toLowerCase() + "Section");
        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - 100;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  }

  observeSections() {
    const options = {
      root: null,
      rootMargin: '-200px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          this.updateActiveOption(sectionId);
        }
      });
    }, options);

    this.options.forEach(option => {
      const section = document.getElementById(option.name.toLowerCase() + "Section");
      if (section) {
        observer.observe(section);
      }
    });
  }

  updateActiveOption(sectionId: string) {
    this.options.forEach(option => {
      option.active = option.name.toLowerCase() + "Section" === sectionId;
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

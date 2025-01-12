import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgForOf
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  options: {name: string, active: boolean}[] = [
    {name: "Portfolio", active: true},
    {name: "Team", active: false},
    {name: "Projects", active: false}
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
  }

  changeContent(name: string) {
    console.log("Content: " + name);
    this.options.forEach(element => {
      if(element.name != name)
        element.active = false;
      else
        element.active = true;
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

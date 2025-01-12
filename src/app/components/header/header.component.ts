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

  changeContent(name: string) {
    console.log("Content: " + name);
  }
}

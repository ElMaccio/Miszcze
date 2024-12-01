import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { NgFor } from '@angular/common';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {AnimatedProjectsScrollerComponent} from '../../components/animated-projects-scroller/animated-projects-scroller.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, NgFor, HeaderComponent, FooterComponent, AnimatedProjectsScrollerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  projects = [
    {name: "Project 1", description: "Project 1 description"},
    {name: "Project 2", description: "Project 2 description"},
    {name: "Project 3", description: "Project 3 description"},
    {name: "Project 4", description: "Project 4 description"},
    {name: "Project 5", description: "Project 5 description"}
  ];
}

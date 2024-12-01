import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { NgFor, CommonModule } from '@angular/common';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {AnimatedProjectsScrollerComponent} from '../../components/animated-projects-scroller/animated-projects-scroller.component';
import { HeroComponent } from "../../components/hero/hero.component";
import { ProfileCardComponent } from "../../components/profile-card/profile-card.component";
import { Skills } from '../../shared/interfaces/skills';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor, AnimatedProjectsScrollerComponent, HeroComponent, ProfileCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  skills:Array<Skills> = [
    { "name": "JavaScript", "bgColor": "#f7df1e" },
    { "name": "Angular", "bgColor": "#dd0031" },
    { "name": "Asp.NET", "bgColor": "#0082c9" },
    { "name": "C++", "bgColor": "#00599c" },
    { "name": "Python", "bgColor": "#306998" },
    { "name": "HTML/CSS", "bgColor": "#e34c26" },
    { "name": "SQL", "bgColor": "#f29111" },
    { "name": "Git", "bgColor": "#f1502f" }
  ];
}

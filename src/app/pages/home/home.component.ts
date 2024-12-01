import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { NgFor, CommonModule } from '@angular/common';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {AnimatedProjectsScrollerComponent} from '../../components/animated-projects-scroller/animated-projects-scroller.component';
import { HeroComponent } from "../../components/hero/hero.component";
import { ProfileCardComponent } from "../../components/profile-card/profile-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor, AnimatedProjectsScrollerComponent, HeroComponent, ProfileCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  skills = [
    { name: "JavaScript", bgColor: "#f7df1e" }, // Yellow (JavaScript's official color)
    { name: "Angular", bgColor: "#dd0031" }, // Angular's official red color
    { name: "Asp.NET", bgColor: "#0082c9" }, // ASP.NET's official blue color
    { name: "C++", bgColor: "#00599c" }, // C++'s common blue shade
    { name: "Python", bgColor: "#306998" }, // Python's official blue color
    { name: "HTML/CSS", bgColor: "#e34c26" }, // HTML's official red color
    { name: "SQL", bgColor: "#f29111" }, // Common orange for SQL
    { name: "Git", bgColor: "#f1502f" } // Git's common red-orange color
  ];
}

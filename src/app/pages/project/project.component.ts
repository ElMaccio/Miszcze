import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ NgIf ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  title: string = '';
  authors: string[] = [];
  githubUrl?: string;
  description: string = '';
  photoUrl?: string;
  error?: string;

  //TODO: add a project interface for storing the project data after fetching it from db

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title = (this.route.snapshot.paramMap.get('name') || "").toString();

    //TODO: only do this if the project doesn't exist in the database
    this.error = "Sorry, looks like this project doesn't exist";
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../interfaces/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private baseUrl:string = "https://localhost:7098/api/Skills";

  constructor(private http: HttpClient) { }

  getSkills() {
    return this.http.get<Skill[]>(this.baseUrl);
  }
}

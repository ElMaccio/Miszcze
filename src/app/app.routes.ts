import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {MaciassdopiaComponent} from './pages/maciassdopia/maciassdopia.component';
import {MiszczeComponent} from './pages/miszcze/miszcze.component';
import { ProjectComponent } from './pages/project/project.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Maciassdopia', component: MaciassdopiaComponent},
  {path: 'Miszcze', component: MiszczeComponent},
  {path: 'projects/:name', component: ProjectComponent},
  {path: '**', component: NotFoundComponent}
];

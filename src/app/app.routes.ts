import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {MaciassdopiaComponent} from './pages/maciassdopia/maciassdopia.component';
import {MiszczeComponent} from './pages/miszcze/miszcze.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Maciassdopia', component: MaciassdopiaComponent},
  {path: 'Miszcze', component: MiszczeComponent},
  {path: '**', component: NotFoundComponent}
];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  // Ruta raíz → carga HomeComponent
  { path: '', component: HomeComponent, title: 'Flujo TV Apk — TV en vivo, deportes y series' },

  // Si alguien entra a /home → redirige a la raíz
  { path: 'home', redirectTo: '', pathMatch: 'full' },

  // Cualquier otra ruta inexistente → redirige a la raíz
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

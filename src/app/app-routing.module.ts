
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './landing/landing.module#LandingModule' },
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });

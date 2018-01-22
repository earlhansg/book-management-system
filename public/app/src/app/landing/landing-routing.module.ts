
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LandingComponent }
];

export const LandingRouting = RouterModule.forChild(routes);

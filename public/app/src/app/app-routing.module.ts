import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

// import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './landing/landing.module#LandingModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }

];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });

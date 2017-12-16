
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      {
         path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'book',
        component: BookComponent
      }
    ]
  }
];

export const DashboardRouting = RouterModule.forChild(routes);

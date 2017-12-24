
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { CreateComponent } from './book/create/create.component';
import { AuthorComponent } from './author/author.component';
import { CreateAuthorComponent } from './author/create-author/create-author.component';
import { MembershipComponent } from './membership/membership.component';

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
        path: 'books',
        component: BookComponent
      },
      {
        path: 'createBook',
        component: CreateComponent
      },
      {
        path: 'author',
        component: AuthorComponent,
        // children: [
        //   {
        //     path: 'newAuthor',
        //     component: CreateAuthorComponent
        //   }
        // ]
      },
      {
          path: 'newAuthor',
          component: CreateAuthorComponent
      },
      {
          path: 'membership',
          component: MembershipComponent
      }

    ]
  }
];

export const DashboardRouting = RouterModule.forChild(routes);


import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { CreateComponent } from './book/create/create.component';
import { AuthorComponent } from './author/author.component';
import { CreateAuthorComponent } from './author/create-author/create-author.component';
import { MembershipComponent } from './membership/membership.component';
import { UserComponent } from './user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      {
         path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'books',
        component: BookComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'createBook',
        component: CreateComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'author',
        component: AuthorComponent,
        canActivate: [AuthGuard]
        // children: [
        //   {
        //     path: 'newAuthor',
        //     component: CreateAuthorComponent
        //   }
        // ]
      },
      {
          path: 'newAuthor',
          component: CreateAuthorComponent,
          canActivate: [AuthGuard]
      },
      {
          path: 'membership',
          component: MembershipComponent,
          canActivate: [AuthGuard]
      },
      {
          path: 'users',
          component: UserComponent,
          canActivate: [AuthGuard]
      }

    ]
  },
  {
    path: '**', component: PagenotfoundComponent
  }
];

export const DashboardRouting = RouterModule.forChild(routes);

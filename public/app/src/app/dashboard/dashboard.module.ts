import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MdlModule } from '@angular-mdl/core';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard.component';

import { DashboardRouting } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { CreateComponent } from './book/create/create.component';
import { AuthorComponent } from './author/author.component';
import { CreateAuthorComponent } from './author/create-author/create-author.component';
import { MembershipComponent } from './membership/membership.component';
import { UserComponent } from './user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { AuthorService } from './author/create-author/author.service';


@NgModule({
  imports: [
    MdlModule,
    CommonModule,
    DashboardRouting,
    ChartsModule
  ],
  declarations: [
    DashboardComponent,
    HomeComponent,
    BookComponent,
    CreateComponent,
    AuthorComponent,
    CreateAuthorComponent,
    MembershipComponent,
    UserComponent,
    PagenotfoundComponent
  ],
  entryComponents: [],
  providers: [AuthorService],
  bootstrap: [ DashboardComponent ]
})
export class DashboardModule {}

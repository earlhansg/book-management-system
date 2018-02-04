import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';


import { DashboardRouting } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { CreateComponent } from './book/create/create.component';
import { AuthorComponent } from './author/author.component';
import { CreateAuthorComponent } from './author/create-author/create-author.component';
import { MembershipComponent } from './membership/membership.component';
import { UserComponent } from './user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AlertComponent } from './alert/alert.component';

import { AuthorService } from './author/create-author/author.service';
import { AlertService } from './alert/alert.service';

import { BooklistFilterPipe } from './book/booklist-filter.pipe';


@NgModule({
  imports: [
    MdlModule,
    CommonModule,
    HttpModule,
    HttpClientModule,
    DashboardRouting,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule
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
    PagenotfoundComponent,
    AlertComponent,
    BooklistFilterPipe
  ],
  entryComponents: [],
  providers: [
    AuthorService,
    AlertService
  ],
  bootstrap: [ DashboardComponent ]
})
export class DashboardModule {}

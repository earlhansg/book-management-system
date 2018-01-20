
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MdlModule } from '@angular-mdl/core';
import { ChartsModule } from 'ng2-charts';

import { LandingComponent } from './landing.component';

import { LandingRouting } from './landing-routing.module';
import { LoginComponent } from './login/login.component';

import { LoginUserService } from './login/login-user.service';
import { AuthGuard } from '../guards/auth.guard';


@NgModule({
  imports: [
    MdlModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LandingRouting,
    ChartsModule
  ],
  declarations: [ LandingComponent, LoginComponent ],
  entryComponents: [LoginComponent],
  providers: [LoginUserService, AuthGuard],
  bootstrap: [ LandingComponent ]
})
export class LandingModule { }

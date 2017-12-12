
import { NgModule } from '@angular/core';

import { MdlModule } from '@angular-mdl/core';

import { LandingComponent } from './landing.component';

import { LandingRouting } from './landing-routing.module';
import { LoginComponent } from './login/login.component';






@NgModule({
  imports: [
    MdlModule,
    LandingRouting,
  ],
  declarations: [ LandingComponent, LoginComponent ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [ LandingComponent ]
})
export class LandingModule { }

import { NgModule } from '@angular/core';

import { MdlModule } from '@angular-mdl/core';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard.component';

import { DashboardRouting } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component'


@NgModule({
  imports: [
    MdlModule,
    DashboardRouting,
    ChartsModule
  ],
  declarations: [ DashboardComponent, HomeComponent ],
  entryComponents: [],
  providers: [],
  bootstrap: [ DashboardComponent ]
})
export class DashboardModule {}


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRouting } from './app-routing.module';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    BrowserModule,
    AppRouting
  ],
  declarations: [
    AppComponent
  ],
  providers: [AuthGuard],
  bootstrap: [ AppComponent ],

})
export class AppModule { }

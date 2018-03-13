
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRouting } from './app-routing.module';

import { AuthGuard } from './guards/auth.guard';

import { ConfigService } from './shared/services/config.service';


@NgModule({
  imports: [
    BrowserModule,
    AppRouting
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AuthGuard,
    ConfigService,
    { provide: 'API_URL', useValue: 'http://localhost:3000' },
  ],
  bootstrap: [ AppComponent ],

})
export class AppModule { }

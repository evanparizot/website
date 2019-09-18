import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Core & Shared
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProfileComponent } from './feature/profile/profile.component';
import { CallbackComponent } from './shared/pages/callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Core
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
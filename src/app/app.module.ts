import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    // Angular stuff
    BrowserAnimationsModule,
    BrowserModule,
    // Core stuff
    CoreModule,
    SharedModule,
    // App stuff
    AppRoutingModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
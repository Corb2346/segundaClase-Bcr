import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnoModule } from './modules/uno/uno.module';
import { DosModule } from './modules/dos/dos.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,UnoModule,DosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

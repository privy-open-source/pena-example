import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PenaModule } from '@privyid/pena-angular'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PenaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

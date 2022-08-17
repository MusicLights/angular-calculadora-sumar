import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //Con este modulo podemos trabajar el concepto de two way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

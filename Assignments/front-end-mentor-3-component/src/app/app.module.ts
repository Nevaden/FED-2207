import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SedansComponent } from './sedans/sedans.component';
import { SuvsComponent } from './suvs/suvs.component';
import { LuxuryComponent } from './luxury/luxury.component';

@NgModule({
  declarations: [
    AppComponent,
    SedansComponent,
    SuvsComponent,
    LuxuryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

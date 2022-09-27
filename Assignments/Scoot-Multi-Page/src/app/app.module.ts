import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { CareersComponent } from './Components/careers/careers.component';
import { LocationsComponent } from './Components/locations/locations.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SmallBlurbsComponent } from './Components/Home/small-blurbs/small-blurbs.component';
import { LargeBlurbsComponent } from './Components/Home/large-blurbs/large-blurbs.component';
import { HeaderComponent } from './Components/Shared/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CareersComponent,
    LocationsComponent,
    NavComponent,
    FooterComponent,
    SmallBlurbsComponent,
    LargeBlurbsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

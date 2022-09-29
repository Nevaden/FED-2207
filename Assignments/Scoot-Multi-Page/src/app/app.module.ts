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
import { MapComponent } from './Components/locations/map/map.component';
import { CitiesComponent } from './Components/locations/cities/cities.component';
import { CityNotListedComponent } from './Components/locations/city-not-listed/city-not-listed.component';
import { WhyJoinUsComponent } from './Components/Shared/why-join-us/why-join-us.component';
import { JobOpeningsComponent } from './Components/careers/job-openings/job-openings.component';
import { AboutLargeBlurbsComponent } from './Components/about/about-large-blurbs/about-large-blurbs.component';
import { FAQComponent } from './Components/about/faq/faq.component';
import { AccordionComponent } from './Components/about/faq/accordion/accordion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkAccordionModule } from '@angular/cdk/accordion'

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
    HeaderComponent,
    MapComponent,
    CitiesComponent,
    CityNotListedComponent,
    WhyJoinUsComponent,
    JobOpeningsComponent,
    AboutLargeBlurbsComponent,
    FAQComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CdkAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

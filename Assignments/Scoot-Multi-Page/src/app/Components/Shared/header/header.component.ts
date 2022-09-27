import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public headerText: string | undefined
  backgroundImageSrc: any = "../../../../assets/images/careers-location-hero-mobile.jpg";
  constructor(private router: Router) { }

  
  ngOnInit(): void {
    window.dispatchEvent(new Event('resize'));
  }

  UpdateBackground(event:any){
    console.log(this.router.url)
    switch (this.router.url) {
      case "/about":
        if (event.target.innerWidth > 1199 ) {
          this.backgroundImageSrc = "../../../../assets/images/about-hero-desktop.jpg"
          break;
        } else if(event.target.innerWidth > 767) {
          this.backgroundImageSrc = "../../../../assets/images/about-hero-tablet.jpg"
          break;
        } else {
          this.backgroundImageSrc = "../../../../assets/images/about-hero-mobile.jpg"
          break;
        }  
      case "/locations":
      case "/careers":
        if (event.target.innerWidth > 1199 ) {
          this.backgroundImageSrc = "../../../../assets/images/careers-locations-hero-desktop.jpg"    
          break;
        } else if(event.target.innerWidth > 767) {
          this.backgroundImageSrc = "../../../../assets/images/careers-locations-hero-tablet.jpg"
          break;
        } else {
          this.backgroundImageSrc = "../../../../assets/images/careers-location-hero-mobile.jpg"
          break;
        }
        default:
          this.backgroundImageSrc = "../../../../assets/images/about-hero-mobile.jpg"
          break;
    }



  }

}

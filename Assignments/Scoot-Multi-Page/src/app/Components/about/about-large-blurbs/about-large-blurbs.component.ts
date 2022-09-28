import { Component, OnInit } from '@angular/core';
import { aboutBlurbData } from 'src/app/Data/aboutBlurbData';
@Component({
  selector: 'app-about-large-blurbs',
  templateUrl: './about-large-blurbs.component.html',
  styleUrls: ['./about-large-blurbs.component.css']
})
export class AboutLargeBlurbsComponent implements OnInit {
  careerBlurbArray = aboutBlurbData;
  constructor() { }

  ngOnInit(): void {
  }

}

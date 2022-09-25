import { Component, OnInit } from '@angular/core';
import { largeBlurbs } from 'src/app/Data/largeBlurbs';

@Component({
  selector: 'app-large-blurbs',
  templateUrl: './large-blurbs.component.html',
  styleUrls: ['./large-blurbs.component.css']
})
export class LargeBlurbsComponent implements OnInit {
  blurbData = largeBlurbs;
  constructor() { }

  ngOnInit(): void {
    console.log(this.blurbData,"blurb large");
  }

}

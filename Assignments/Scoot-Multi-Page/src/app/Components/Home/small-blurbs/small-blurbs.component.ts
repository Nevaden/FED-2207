import { Component, OnInit } from '@angular/core';
import { smallBlurbs } from 'src/app/Data/smallBlurbs';

@Component({
  selector: 'app-small-blurbs',
  templateUrl: './small-blurbs.component.html',
  styleUrls: ['./small-blurbs.component.css']
})
export class SmallBlurbsComponent implements OnInit {
  blurbData = smallBlurbs;

  constructor() { }

  ngOnInit(): void {
    console.log(this.blurbData)
  }

}

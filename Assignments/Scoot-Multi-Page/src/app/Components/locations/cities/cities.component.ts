import { Component, OnInit } from '@angular/core';
import { cities } from 'src/app/Data/locationsCities';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  citiesList = cities;

  constructor() { }

  ngOnInit(): void {
  }

}

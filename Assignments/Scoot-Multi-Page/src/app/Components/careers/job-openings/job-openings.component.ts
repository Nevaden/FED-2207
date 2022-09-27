import { Component, OnInit } from '@angular/core';
import { jobOpenings } from 'src/app/Data/jobOpenings';

@Component({
  selector: 'app-job-openings',
  templateUrl: './job-openings.component.html',
  styleUrls: ['./job-openings.component.css']
})
export class JobOpeningsComponent implements OnInit {
jobsArray = jobOpenings;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { blurbsContent } from 'src/app/Data/techIntegrityCommunity';

@Component({
  selector: 'app-why-join-us',
  templateUrl: './why-join-us.component.html',
  styleUrls: ['./why-join-us.component.css']
})
export class WhyJoinUsComponent implements OnInit {

  blurbArray = blurbsContent;
  @Input() public sectionTitle: string | undefined
  
  constructor() { }

  ngOnInit(): void {
  }

}

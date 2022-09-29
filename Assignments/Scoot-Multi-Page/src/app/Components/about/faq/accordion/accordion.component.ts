import { Component, OnInit } from '@angular/core';
import { accordianFAQS } from 'src/app/Data/accordionFAQS';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  // items = ['How do I download the app?',"Can I find a nearby Scoots?","Do I need a license to ride?"];
  AccordionArticles = accordianFAQS;
  expandedIndex = 0;
  cheveronLocked = '';
  constructor() { }

  ngOnInit(): void {
    console.log(this.AccordionArticles, "full object")
    console.log(this.AccordionArticles[0],"1st")
    console.log(this.AccordionArticles[1],"2nd")
  }


  // flipChevron(obj:any){
  //   this.classList.toggle('flipped')
  // }

}

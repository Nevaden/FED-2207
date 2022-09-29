import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  items = ['Item 1',"chevron encoded"];
  expandedIndex = 0;
  cheveronLocked = '';
  constructor() { }

  ngOnInit(): void {
    
  }


  // flipChevron(obj:any){
  //   this.classList.toggle('flipped')
  // }

}

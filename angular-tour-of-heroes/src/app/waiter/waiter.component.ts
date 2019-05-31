import { Component, OnInit } from '@angular/core';
import { BREAKFAST as BREAKFAST_IMPORT } from '../mock-menu';//al agregae 'as' no chocan los nombres de los elementos exportados e importados 
import { MenuBreakfast } from '../orderBreakfast';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {
  
  BREAKFAST:MenuBreakfast[] = BREAKFAST_IMPORT;//LLAMO A CLASE 
  selectedbreakfast: MenuBreakfast; 
  
  
  constructor() { 

  }
  ngOnInit() {
  }
onSelect(waiter:MenuBreakfast):void{
  this.selectedbreakfast = waiter;
}
}

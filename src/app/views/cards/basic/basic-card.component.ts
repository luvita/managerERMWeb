import { Component, OnInit,ViewEncapsulation, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
    selector: 'ms-basic-cards',
    templateUrl:'./basic-card-component.html',
    styleUrls: ['./basic-card-component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BasicCardComponent implements OnInit {
  
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor() {}

  ngOnInit() {
    
  }
	
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
];





import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SuggestionNamesComponent } from '../suggestion-names/suggestion-names.component';
// import { SearchAutoService } from './search-auto.service';
// import { AuthenticationService } from "../../../core/service/authentication.service";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { SearchUser } from '../../../core/model/search-user';
import { FormControl } from '@angular/forms';
import { switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material';
// import { Space } from '../../../core/model/space';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  cancel: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', position: 'Hydrogen', weight: 'Hydrogen', cancel: 'H'},
  {name: 'Hydrogen', position: 'Helium', weight: 'Hydrogen', cancel: 'He'},
  {name: 'Hydrogen', position: 'Lithium', weight: 'Hydrogen', cancel: 'Li'},
  {name: 'Hydrogen', position: 'Beryllium', weight: 'Hydrogen', cancel: 'Be'},
  {name: 'Hydrogen', position: 'Boron', weight: 'Hydrogen', cancel: 'B'},
  {name: 'Hydrogen', position: 'Carbon', weight: 'Hydrogen', cancel: 'C'},
  {name: 'Hydrogen', position: 'Nitrogen', weight: 'Hydrogen', cancel: 'N'},
  {name: 'Hydrogen', position: 'Oxygen', weight: 'Hydrogen', cancel: 'O'},
  {name: 'Hydrogen', position: 'Fluorine', weight: 'Hydrogen', cancel: 'F'},
  {name: 'Hydrogen', position: 'Neon', weight: 'Hydrogen', cancel: 'Ne'},
];

@Component({
  selector: 'app-space-tab-content',
  templateUrl: './space-tab-content.component.html',
  styleUrls: ['./space-tab-content.component.scss']
})
export class SpaceTabContentComponent implements OnInit {
  // @Output() data: EventEmitter<Space> = new EventEmitter<Space>()
  // @Input() refeshData= new MatTableDataSource<PeriodicElement>();
  displayedColumns: string[] = ['position', 'name', 'weight', 'cancel'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  data = Object.assign( ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  private search = [];
  private filteredUsers = [];
  public inputValues: any;
  myControl = new FormControl();
  private spaceUser = [];
  message: string;

  list: string[] = [];

  // newSpace1: Space = {
  //   "orgLoginID": "Ricoh",
  //   "loginID": this.list,
  //   "spaceID": this.message
  // }

  constructor() {
      
  }

  ngOnInit() {
    
  }

  removeAt(index: number) {
    const data = this.dataSource.data;
    data.splice(index, 1);
    
    this.dataSource.data = data;
  }

  addData() {
  //   let size = ELEMENT_DATA.length != 0;
  //   let chkUdefine = this.inputValues != undefined;
  //   let chkNull = this.inputValues != null;
  //   let includeData = this.filteredUsers.some(e => e.loginID === this.inputValues);

  //   this.data.emit(this.newSpace1);

  //   if (size && chkUdefine && chkNull && includeData) {
  //     for (let key in ELEMENT_DATA) {
  //       if (ELEMENT_DATA[key].position != this.inputValues) {
  //         ELEMENT_DATA.push({ position: this.inputValues, name: '', weight: "-", cancel: 'H' });
  //         this.list.push(this.inputValues);
  //         this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  //       }
  //     }
  //   } else if (includeData) {
  //     ELEMENT_DATA.push({ position: this.inputValues, name: '', weight: "-", cancel: 'H' });
  //     this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  //     this.list.push(this.inputValues);
  //   }

  //   this.newSpace1.loginID = this.list;
  }

  // onKey(event: any) {
  //   this.filteredUsers = [];
  //   this.authService.logindemo().subscribe(res => {
  //     this.searchUser.searchData(res, this.inputValues).subscribe(
  //       search => {
  //         this.filteredUsers = [search];
  //       },
  //       err => {
  //         console.log("error: " + err);
  //       }
  //     )
  //   }
  //   );
  // }

}

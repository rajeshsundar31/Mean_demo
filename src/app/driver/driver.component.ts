import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  position: number;
  age:number;
  carrier: string;
  mobile: string;
  experience: number;
  track:string,
  allocate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'VASU', carrier: 'STAR LOGISTIC',age: 30, mobile:'9834576478', experience: 3, track:'mobile', allocate: 'vehicle list'},
  {position: 2, name: 'RAMU123', carrier: '',age: 38, mobile:'2745679876', experience: 4, track:'mobile', allocate: 'allocate'},
  {position: 3, name: 'KISHORE', carrier: 'PRASAD',age: 38, mobile:'9354765127', experience: 5, track:'mobile', allocate: 'vehicle list'},
  {position: 4, name: 'DRIVER3', carrier: 'SHIPSYCARRIER3',age: 40, mobile:'8432457123', experience: 3, track:'mobile', allocate: 'vehicle list'},
  {position: 5, name: 'DRIVER2', carrier: 'SHIPSYCARRIER3',age: 40, mobile:'8964536264', experience: 3, track:'Gps', allocate: 'vehicle list'},
  {position: 6, name: 'DRIVER1', carrier: 'SHIPSYCARRIER1',age: 40, mobile:'9876453525', experience: 1, track:'mobile', allocate: 'vehicle list'},
  {position: 7, name: 'REO', carrier: '',age: 40, mobile:'8974515638', experience: 0, track:'mobile', allocate: 'vehicle list'},
  {position: 8, name: 'KUMAR', carrier: '',age: 38, mobile:'2745679876', experience: 2, track:'mobile', allocate: 'vehicle list'},
  {position: 9, name: 'hari', carrier: '',age: 40, mobile:'27456798467', experience: 3, track:'mobile', allocate: 'vehicle list'},
  {position: 10, name: 'HARI', carrier: '',age: 40, mobile:'8763546783', experience: 2, track:'mobile', allocate: 'vehicle list'},
];

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'carrier', 'age', 'mobile', 'experience', 'track',  'allocate'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  addDriver = false;
  driverInfo = true;

  constructor() { }

  ngOnInit(): void {
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

   add(){
     this.addDriver = true;
     this.driverInfo=false;
   }

   cancel(){
     this.addDriver= false;
     this.driverInfo = true;
   }
}

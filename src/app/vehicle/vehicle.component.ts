import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  position: number;
  weight:string;
  person: string;
  mobile: string;
  experience: number;
  track:string,
  allocate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'TG 06 DG 7897', person: 'TG-Vehicle', weight: "300.00kg", mobile:'9834576478', experience: 3, track:'14 May,2022', allocate: 'STAR LOGISTICS'},
  {position: 2, name: 'TG 05 DA 3498', person: 'AP-Vehicle', weight: "1500.00kg", mobile:'2745679876', experience: 4, track:'04 May, 2022', allocate: 'PRASAD'},
  {position: 3, name: 'TG 06 DE 3490', person: 'shipy/vehicle3', weight: "2000kg", mobile:'9354765127', experience: 5, track:'02 Jan,2022', allocate: 'SHIPYCARRIER3'},
  {position: 4, name: 'TG 02 AE 1290', person: 'shipy/vehicle2', weight: "300.00kg", mobile:'8432457123', experience: 3, track:'17 Feb,2022', allocate: '-Assign vendor-'},
  {position: 5, name: 'TG 01 AB 3102', person: 'shipy/vehicle', weight: "700.00kg", mobile:'8964536264', experience: 3, track:'15 Mar,2022', allocate: 'SHIPYCARRIER1'},
  {position: 6, name: 'TG 01 AB 9999', person: 'krishna', weight: "1700.00kg", mobile:'9876453525', experience: 1, track:'12 Aprl,2022', allocate: 'vehicle list'},
  {position: 7, name: 'TG 02 AC 2985', person: 'ram', weight: "800.00kg", mobile:'8974515638', experience: 0, track:'25 Feb,2022', allocate: 'STAR LOGISTICS'},
  {position: 8, name: 'TG 04 AJ 2378', person: 'kumar', weight: "900.00kg", mobile:'2745679876', experience: 2, track:'29 Feb,2022', allocate: 'RAJU'},
  {position: 9, name: 'TG 02 AJ 9738', person: 'raju', weight: "1000kg", mobile:'27456798467', experience: 3, track:'11 May,2022', allocate: 'SHIPYCARIEER2'},
  {position: 10, name: 'TG 08 MJ 2938', person: 'reo', weight: "300.00kg", mobile:'8763546783', experience: 2, track:'15, May,2022', allocate: 'LOCAL'},
];

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'person', 'mobile', 'weight', 'experience', 'track',  'allocate'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  addVehicle=false;
  vehicleTable=true;

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
    this.addVehicle = true;
    this.vehicleTable = false;
  }

  cancel(){
    this.addVehicle=false;
    this.vehicleTable=true;
  }

}

import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogformComponent } from '../dialogform/dialogform.component';
import { BaseService } from '../service/base.service.service';
import { TranslateService } from '@ngx-translate/core';

export interface PeriodicElement {
  description: string;
  org: string;
  user:string;
  customer: string;
  insertdate: string;
  updatedate:string,
  updateduser: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];


@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  displayedColumns: string[] = ['select', 'customer',  'org',   'description',  'insertdate', 'user', 'updatedate',  'updateduser', 'delete', 'update'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  groups:any;
  matTable=false;
  mapPage=true;
  DeleteData=false;
  user: any;
  searchbar=false;
  username:string='';
  lang :any ='en';
  staff: any | null;
  lat = 10.786999;
  lng = 79.137825;

  @ViewChild (MatTable, {static: true}) table: MatTable<any> | undefined

  constructor(
    public dialog: MatDialog,
    private translateService: TranslateService,
    private _base: BaseService,
  ) { 
    this.lang = window.localStorage.getItem("lang");
      this.translateService.use(this.lang);
  }

  ngOnInit(): void {
    this.getData()
    this.getTableData()
  }

  search(){
    this.searchbar = true;
  }
  SearchFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    console.log("filter", filterValue)
    this.groups.filter = filterValue.trim().toLocaleLowerCase();
    console.log("tablefilert", this.groups.filter)
  }

  langSelect(index:any){
    this.lang = index;
    window.localStorage.setItem("lang",this.lang);
    console.log("language",this.lang)
    this._base.languageEvent.next(this.lang);
    this.translateService.use(this.lang);
  }

  openDialog(){
    const dialogRef= this.dialog.open(DialogformComponent);
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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'}`;
  }

  getData(){
    this._base.doGETUrl("http://localhost:3000/api/login/user").subscribe({
      next: (res: any) => {
        this.username = res.result.pop().user_name ;
        console.log("username", this.username)
      }
    })
  }

  getTableData(){
    this._base.doGETUrl("http://localhost:3000/api/base").subscribe({
      next:(res: any)=> {
        console.log("get", res.results);
        this.groups = res.results;
        console.log("value got1111111", this.groups[0].insert_user)
        console.log("value got22222222", this.username)

        this.groups.forEach((element:any) => {
          element.insert_user = this.username.slice(0,3);
        });
        // this.groups[0].insert_user=this.username
        console.log("value got", this.groups)
      }
    })
  }

  deleteTable(postId:string){
    const delIndex = this.groups[postId]
    console.log("deleteapi", delIndex)
    this._base.doDelete("http://localhost:3000/api/delete/"+delIndex._id).subscribe({
      next: (res: any) => {
        console.log("do delete the data")
        return res;
      }
    })
  }
  

  updateTable(row: any){
    console.log("param", row)
    const delIndex = row._id;
    // let id = delIndex._id;
    console.log("Tableindex", delIndex)
    const dialogRef = this.dialog.open(DialogformComponent, {
      data : row
    });
    console.log("data", dialogRef)


    // this._base.doPatch("http://localhost:3000/api/update/"+delIndex, row).subscribe({
    //   next: (res: any) => {
    //     console.log("update method was called");
    //     console.log("res", res)
    //     return res;
    //   }
    // })
  }
  tableDataUser(){
    this.matTable = true;
    this.mapPage = false;
  }

}

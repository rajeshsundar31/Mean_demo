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

const ELEMENT_DATA: PeriodicElement[] = [
  // {description: 'TG 06 DG 7897', customer: 'TG-Vehicle', org: 'Tphrs', user: "rajesh", insertdate:'05/05/22', updatedate:'14 May,2022', updateduser: 'STAR LOGISTICS'},
  // {description: 'TG 05 DA 3498', customer: 'AP-Vehicle', org: '',  user: "ram", insertdate:'04/04/22', updatedate:'04 May, 2022', updateduser: 'PRASAD'},
  // {description: 'TG 06 DE 3490', customer: 'shipy/vehicle3', org: 'myscm',  user: "sundar", insertdate:'05/05/22',  updatedate:'02 Jan,2022', updateduser: 'SHIPYCARRIER3'},
  // {description: 'TG 02 AE 1290', customer: 'shipy/vehicle2', org: 'Etruck',  user: "david", insertdate:'2/05/22',updatedate:'17 Feb,2022', updateduser: '-Assign vendor-'},
  // {description: 'TG 01 AB 3102', customer: 'shipy/vehicle', org: 'etruck',  user: "kumar", insertdate:'7/02/22',updatedate:'15 Mar,2022', updateduser: 'SHIPYCARRIER1'},
  // {description: 'TG 01 AB 9999', customer: 'krishna', org: 'tps',  user: "arun", insertdate:'9/05/22', updatedate:'12 Aprl,2022', updateduser: 'vehicle list'},
  // {description: 'TG 02 AC 2985', customer: 'ram', org: 'tphrs',  user: "vinoth", insertdate:'30/01/22', updatedate:'25 Feb,2022', updateduser: 'STAR LOGISTICS'},
  // {description: 'TG 04 AJ 2378', customer: 'kumar', org: 'etrucknow',  user: "ani", insertdate:'', updatedate:'29 Feb,2022', updateduser: 'RAJU'},
  // {description: 'TG 02 AJ 9738', customer: 'raju', org: 'myscm',  user: "vikram", insertdate:'11/03/22', updatedate:'11 May,2022', updateduser: 'SHIPYCARIEER2'},
  // {description: 'TG 08 MJ 2938', customer: 'reo', org: '',  user: "sabari", insertdate:'01/05/22', updatedate:'15, May,2022', updateduser: 'LOCAL'},
];

@Component({
  selector: 'app-myscm',
  templateUrl: './myscm.component.html',
  styleUrls: ['./myscm.component.scss'],
})
export class MyscmComponent implements OnInit {
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

  // openDialog(){
  //   const dialogRef= this.dialog.open(DialogformComponent);
  // }

  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  // /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {  
  //   if (this.isAllSelected()) {
  //     this.selection.clear();
  //     return;
  //   }

  //   this.selection.select(...this.dataSource.data);
  // }

  // /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: PeriodicElement): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'}`;
  // }

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

  // deleteTable(postId:string){
  //   const delIndex = this.groups[postId]
  //   console.log("deleteapi", delIndex)
  //   this._base.doDelete("http://localhost:3000/api/delete/"+delIndex._id).subscribe({
  //     next: (res: any) => {
  //       console.log("do delete the data")
  //       return res;
  //     }
  //   })
  // }
  

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

}

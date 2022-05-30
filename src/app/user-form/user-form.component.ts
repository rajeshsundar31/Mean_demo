import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseService } from '../service/base.service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  displayedColumns=["name", "designations", "company"]
  data : any;
  groups:any;
  // groups:any[] =[
  //   {
  //     name: "rajesh",
  //     designations: "web-app developer",
  //     company: "tphrs",
  //   },
  //   {
  //     name: "sundar",
  //     designations: "software-developer",
  //     company: "tphrs"
  //   },
  //   {
  //     name: "yousuf",
  //     designations: "software-web app-developer",
  //     company: "tphrs"
  //   }
  // ];

  constructor(
    private _base : BaseService
   ) { }

  userForm! : FormGroup

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name : new FormControl("", Validators.required),
      designations : new FormControl("", Validators.required),
      company : new FormControl("", Validators.required)
    })
    this.getDataUser()
  }

  getDataUser(){
    this._base.doGETUrl("http://localhost:3000/api/base").subscribe({
      next: (res: any) => {
        console.log("get", res.results)
        this.groups = res.results;
      }
    })
  }

  addUser(){
    this._base.doPOSTUrl("http://localhost:3000/api/post", this.userForm.value).subscribe({
      next: (res: any) => {
        console.log("post", res.userList)
        return res;
      }
    })
  }

}

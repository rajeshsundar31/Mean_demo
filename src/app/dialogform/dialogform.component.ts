import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseService } from '../service/base.service.service';

@Component({
  selector: 'app-dialogform',
  templateUrl: './dialogform.component.html',
  styleUrls: ['./dialogform.component.scss']
})
export class DialogformComponent implements OnInit {
  data:any=[];
  formData:any;
  action: any;
  username: string='';
  staff: any;

  TableForm = new FormGroup({
    organization: new FormControl(''),
    description: new FormControl(''),
    customer : new FormControl(''),
    insert_date : new FormControl( new Date()),
    insert_user: new FormControl(''),
    updated_date: new FormControl(new Date()),
    updated_user: new FormControl('rajesh'),
  })

  constructor(
    private _base: BaseService,
    public dialogRef: MatDialogRef<DialogformComponent>,
    @Inject(MAT_DIALOG_DATA) public data1: any,   
  ) {
    this.action = data1.action;
    if (this.action === "edit"){
      this.staff = data1.staff;
      console.log("action value", this.staff)
    }
   }

  ngOnInit(): void {
    this.getData()

  }

  



  getData(){
    this._base.doGETUrl("http://localhost:3000/api/login/user").subscribe({
      next: (res: any) => {
        // this.username = res.result.pop().user_name;
        
        return this.username
      }
    })
  }

  postData(){
    this._base.doPOSTUrl("http://localhost:3000/api/posts", this.TableForm.value).subscribe({
      next: (res: any) => {
        // this.TableForm.setValue({
        //   this.insert_user.controls['']
        // })
        console.log("post", this.TableForm.value)
        return res;
      }
    })
  }

  UpdatedData(){
    this._base.doPatch("http://localhost:3000/api/update/"+this.data1._id, this.action).subscribe({
      next: (res: any) => {
        console.log("update method was called");
        console.log("dataupdate", this.action)
        console.log("res", res)
        return res;
      }
    })
  }
  onNoClick(){
    this.dialogRef.close();
  }
  
  
}

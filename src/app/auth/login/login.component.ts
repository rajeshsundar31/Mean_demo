import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseService } from 'src/app/service/base.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public _base: BaseService,
  ) { }

  ngOnInit(): void {
  }

  UserForm = new FormGroup({
    user_name: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  addUser(){
    this._base.doPOSTUrl("http://localhost:3000/api/login", this.UserForm.value).subscribe({
      next: (res:any) => {
        console.log("login", res)
        return res;
      }
    })
  }

  OnSubmit(){
    console.log("user", this.UserForm.value)
  }
}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseService } from '../service/base.service.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  lang:any='en';
  username: string= '';

  constructor(
    private translateService: TranslateService,
    private _base: BaseService
  ) {
    this.lang = window.localStorage.getItem("lang");
      this.translateService.use(this.lang);
   }

   TableForm = new FormGroup({
    organization: new FormControl(''),
    description: new FormControl(''),
    customer : new FormControl(''),
    insert_date : new FormControl( new Date()),
    insert_user: new FormControl(''),
    updated_date: new FormControl(new Date()),
    updated_user: new FormControl('rajesh'),
  })

  ngOnInit(): void {
  }

  langSelect(index:any){
    this.lang = index;
    window.localStorage.setItem("lang",this.lang);
    console.log("language",this.lang)
    this._base.languageEvent.next(this.lang);
    this.translateService.use(this.lang);
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


}

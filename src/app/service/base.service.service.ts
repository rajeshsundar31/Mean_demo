import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  
  languageEvent: Subject<object> = new Subject<object>();
  formData : any;

  constructor(
    private _http : HttpClient

  ) {
    this.languageEvent.subscribe((ele:any)=>{

    });

   }

  doGETUrl(URL: string, Options?: any) {
    return this._http.get(URL, Options)
  }

  doPOSTUrl(URL: string, Body:any, Options?: any){
    return this._http.post(URL, Body, Options);
  }

  doDelete(postId:string,  Options?:any){
    return this._http.delete( postId, Options)
  }

  doPatch(URL: string, Body: any, Options?:any) {
    return this._http.patch(URL, Body, Options)
  }
}

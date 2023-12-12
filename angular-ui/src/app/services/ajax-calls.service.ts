import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MasterDataModel} from "../models/master-data.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AjaxCallsService {

  constructor(private httpClient: HttpClient) { }

  private isLocal(){
    return window.location.href.includes('localhost');
  }
  public getMasterData(): Observable<MasterDataModel>{
    let url = 'api/master-data';
    if(this.isLocal()){
      url = 'http://localhost:3000/' + url;
    }
    return this.httpClient.get<MasterDataModel>(url);

  }
}

import {Component, OnInit} from '@angular/core';
import {AjaxCallsService} from "../../services/ajax-calls.service";
import {MasterDataModel} from "../../models/master-data.model";

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit{
  public stocksList: string[] = [];

  constructor(private ajaxCallsService: AjaxCallsService) {
  }

  ngOnInit(): void {
    this.ajaxCallsService.getMasterData().subscribe({
      next: (data: MasterDataModel)=>{
        this.stocksList = data.stockSymbols;
      }
    })
  }

}

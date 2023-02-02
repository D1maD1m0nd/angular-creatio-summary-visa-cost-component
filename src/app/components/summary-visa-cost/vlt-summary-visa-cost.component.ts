import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'vlt-summary-visa-cost-component',
  templateUrl: './vlt-summary-visa-cost-component.html',
  styleUrls: ['./vlt-summary-visa-cost-component.scss']
})
export class VltSummaryVisaCostComponent implements OnInit {
  constructor(public apiService: ApiService) {
  }

  SendSaveDataIntoServer() {
    this.apiService.PostSaveDataBudgetDetail().subscribe((i) => {
      console.log(i)
      this.apiService.ClearSaveData()
    })
  }

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    const yearId = params.get('YearId');
    const brandId = params.get('BrandId');
    //?YearId=42533c5f-b173-4386-a1d9-8e02e5b91d4d&BrandId=f4c9e1ef-167e-4aef-b2c1-56950486df79
    this.apiService.GetVisaSummary(yearId, brandId).subscribe((i) => {
      console.log(i);
    })
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {IVisaCostSummary} from "../../data/model/response/VisaCostSummary";

@Component({
    selector: 'vlt-summary-visa-cost-component',
    templateUrl: './vlt-summary-visa-cost-component.html',
    styleUrls: ['./vlt-summary-visa-cost-component.scss']
})
export class VltSummaryVisaCostComponent implements OnInit {
    @Input("visa-cost-summary") VisaCostSummary: IVisaCostSummary
    @Output() VisaCostSummarySaveEmitter = new EventEmitter<Map<string, number>>();
    VisaCostSummarySave: Map<string, number> = new Map<string, number>()

    constructor(public apiService: ApiService) {
    }

    SendSaveDataIntoServer() {
        this.apiService.PostSaveDataBudgetDetail().subscribe((i) => {
            console.log(i)
            this.apiService.ClearSaveData()
        })
    }

    ngOnInit(): void {
        console.log(this.VisaCostSummary)
    }
}

import {Component} from '@angular/core';
import {IVisaCostSummary} from "./data/model/response/VisaCostSummary";
import {data} from "./data/mock/TestData";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    data: IVisaCostSummary = data
}

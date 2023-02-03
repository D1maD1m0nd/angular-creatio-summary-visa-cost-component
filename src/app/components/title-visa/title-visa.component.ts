import {Component, Input, OnInit} from '@angular/core';
import {IMetaData} from 'src/app/data/model/response/MetaData';

@Component({
    selector: 'vlt-title-visa',
    templateUrl: './title-visa.component.html',
    styleUrls: ['./title-visa.component.scss']
})
export class TitleVisaComponent implements OnInit {

    @Input() metaData: IMetaData

    ngOnInit(): void {
    }

}

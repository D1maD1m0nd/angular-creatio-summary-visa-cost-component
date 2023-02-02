import {Component, Input, OnInit} from '@angular/core';
import {ICostColumn} from 'src/app/data/model/response/CostColumn';
import {FilteringColumnService} from "../../services/filtering-column.service";

@Component({
  selector: 'vlt-filter-column',
  templateUrl: './filter-column.component.html',
  styleUrls: ['./filter-column.component.scss']
})
export class FilterColumnComponent implements OnInit {

  @Input() column: ICostColumn

  constructor(public filterColumnService: FilteringColumnService) {
  }

  ngOnInit(): void {
  }

}

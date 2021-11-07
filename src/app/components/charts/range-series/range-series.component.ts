import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-range-series',
  templateUrl: './range-series.component.html',
  styleUrls: ['./range-series.component.css']
})
export class RangeSeriesComponent implements OnInit {

  @Input()
  id: number;

  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log('range-series');
  }

  getData(){
    this.dataService.getRangeChartValues(this.id).subscribe(response => console.log(response));
  }

}

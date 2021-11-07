import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-line-series',
  templateUrl: './line-series.component.html',
  styleUrls: ['./line-series.component.css']
})
export class LineSeriesComponent implements OnInit {

  @Input()
  id: number;

  data: any;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log('line_series');
  }


  getData() {
    this.dataService.getLineChartValues(this.id).subscribe(response => console.log(response));
  }

}

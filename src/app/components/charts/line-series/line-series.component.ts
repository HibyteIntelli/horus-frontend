import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-line-series',
  templateUrl: './line-series.component.html',
  styleUrls: ['./line-series.component.css']
})
export class LineSeriesComponent implements OnInit {

  @Input()
  data: any;


  constructor() { }

  ngOnInit(): void {
    console.log('line_series');
  }

}

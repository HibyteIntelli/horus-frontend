import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-range-series',
  templateUrl: './range-series.component.html',
  styleUrls: ['./range-series.component.css']
})
export class RangeSeriesComponent implements OnInit {

  @Input()
  data: any;

  constructor() { }

  ngOnInit(): void {
    console.log('range-series');
  }

}

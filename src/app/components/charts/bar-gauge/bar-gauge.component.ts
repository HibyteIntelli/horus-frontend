import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bar-gauge',
  templateUrl: './bar-gauge.component.html',
  styleUrls: ['./bar-gauge.component.css']
})
export class BarGaugeComponent implements OnInit {

  @Input()
  id: number;

  data: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log('bar-gauge');
  }

}

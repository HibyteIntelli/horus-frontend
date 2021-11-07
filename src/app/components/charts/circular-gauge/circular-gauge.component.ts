import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-circular-gauge',
  templateUrl: './circular-gauge.component.html',
  styleUrls: ['./circular-gauge.component.css']
})
export class CircularGaugeComponent implements OnInit {

  @Input()
  data: any;

  size = {
    width: '600px',
    height: '200px'
  };

  constructor() { }

  ngOnInit(): void {
    console.log('circular_gauge');
  }

}

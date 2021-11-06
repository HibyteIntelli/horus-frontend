import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChartTypeEnum} from "../../types";

@Component({
  selector: 'app-chart-configuration',
  templateUrl: './chart-configuration.component.html',
  styleUrls: ['./chart-configuration.component.css']
})
export class ChartConfigurationComponent implements OnInit {

  parameters: {name: string}[] = [
    {name: 'Temperature'},
    {name: 'Humidity'},
    {name: 'Wind Speed'},
    {name: 'Sea Ice Thickness'}
  ];

  @Input()
  noOfDisplays = 1;

  @Output()
  addConfiguration = new EventEmitter();

  chartTypes = [
    {type: ChartTypeEnum.bar},
    {type: ChartTypeEnum.circularGauge},
    {type: ChartTypeEnum.doughnut},
    {type: ChartTypeEnum.line},
    {type: ChartTypeEnum.pie},
    {type: ChartTypeEnum.range}
  ];

  showMap = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.parameters);
  }

  onGridBoxOptionChanged($event: any){
  }

}

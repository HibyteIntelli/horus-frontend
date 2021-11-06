import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChartTypeEnum} from "../../types";

@Component({
  selector: 'app-chart-configuration',
  templateUrl: './chart-configuration.component.html',
  styleUrls: ['./chart-configuration.component.css']
})
export class ChartConfigurationComponent implements OnInit {

  parameters: {id: number, name: string}[] = [
    {id: 1, name: 'Temperature'},
    {id: 2, name: 'Humidity'},
    {id: 3, name: 'Wind Speed'},
    {id: 4, name: 'Sea Ice Thickness'}
  ];

  @Input()
  noOfDisplays = 1;

  @Output()
  addConfiguration = new EventEmitter();
  @Output()
  dashboardTitle = new EventEmitter();

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

  ngOnInit(): void {}

  onGridBoxOptionChanged($event: any){
  }

}

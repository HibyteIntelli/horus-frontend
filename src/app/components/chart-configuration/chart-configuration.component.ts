import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChartTypeEnum, Layout} from "../../types";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-chart-configuration',
  templateUrl: './chart-configuration.component.html',
  styleUrls: ['./chart-configuration.component.css']
})
export class ChartConfigurationComponent implements OnInit {

  @Input()
  noOfDisplays = 1;

  @Output()
  addConfiguration = new EventEmitter();
  @Output()
  dashboardTitle = new EventEmitter();
  @Output()
  chartTitle = new EventEmitter();
  @Output()
  targetName = new EventEmitter();
  @Output()
  chartType = new EventEmitter();
  @Output()
  parameter = new EventEmitter();


  parameters: { name: string }[] = [
    {name: 'Temperature'},
    {name: 'Humidity'},
    {name: 'Wind Speed'},
    {name: 'Sea Ice Thickness'}
  ];

  chartTypes = [
    {type: ChartTypeEnum.bar},
    {type: ChartTypeEnum.circularGauge},
    {type: ChartTypeEnum.line},
    {type: ChartTypeEnum.range}
  ];
  showMap = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  emitParameter($event: any) {
    this.parameter.emit($event.selectedItem.name);
  }

  emitChartType($event: any) {
    this.chartType.emit($event.selectedItem.type);
  }
}

import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data.service";
import {Chart, ChartType, Dashboard} from "../../types";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  editMode: string;
  dashboardId: number;
  dashboard: Dashboard;
  dashboardCharts: any[] = [];
  chartTypes: ChartType[] = [];
  chartsOrder: Map<number, string> = new Map();


  constructor(private route: ActivatedRoute, private dataService: DataService, private datePipe: DatePipe) {
    this.route.queryParams.subscribe(response => {
      this.dashboardId = response['id'];
      this.editMode = response['editMode'];
    });
  }

  ngOnInit(): void {
    this.dataService.getDashboardById(this.dashboardId).subscribe(response => {
      this.dashboard = response;
      this.dashboard.charts.forEach(chartId => this.dataService.getChartById(chartId).subscribe(response => {
        this.dashboardCharts.push(response);
      }));
    });

    if (this.editMode) {
      this.setContainerSize();
    }

    this.getChartTypes();

  }

  sortArray() {
    this.dashboardCharts[0] = this.dashboardCharts.find(chart => chart?.id === 1073);
    this.dashboardCharts[1] = this.dashboardCharts.find(chart => chart?.id === 1074);
    this.dashboardCharts[2] = this.dashboardCharts.find(chart => chart?.id === 1075);
    this.dashboardCharts[3] = this.dashboardCharts.find(chart => chart?.id === 1076);
  }

  getChartTypes() {
    this.dataService.getAllChartTypes().subscribe(response => this.chartTypes = response);
  }

  setContainerSize() {
    // @ts-ignore
    document.getElementById('container')?.style.width = `${window.innerWidth / 2.5}px`;
    // @ts-ignore
    document.getElementById('chart-container')?.style.width = `${window.innerWidth / 2.5}px`
  }

  selectChart($event: any, i: number) {
    this.chartsOrder.set(i, $event.selectedItem);
  }

  saveLayout() {
    let charts: any = [];
    this.chartsOrder.forEach(chartOrder => {
      const data: any = chartOrder;
      charts.push(data);
    });
    this.saveDashboardCharts(charts);
  }

  saveDashboardCharts(charts: any) {
    this.dashboard.charts = charts;
    this.editMode = 'false';
  }

  typeMatches(type: string, chart: Chart) {
    return this.chartTypes.find(chartType => chartType.id === chart.chartType)?.key === type;
  }

  getHour() {
    return this.datePipe.transform(new Date(), 'HH:mm')
  }

}

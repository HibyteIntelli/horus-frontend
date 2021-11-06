import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Chart, Dashboard, Layout, Metric, Target, Team, Location, ChartType} from "../../types";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {

  @Input()
  visible = false;

  @Output()
  newDashboardEmitter = new EventEmitter();

  noOfDisplays = 1;
  newDashboard: Dashboard = new Dashboard();
  chartTitle: string;
  chartType: string;
  targetName: string;
  parameter: string;
  charts: Chart[] = [];
  allChartTypes: ChartType[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getAllChartTypes().subscribe(response => this.allChartTypes = response);
  }

  addConfiguration() {
    this.noOfDisplays++;
    this.buildCharts();
  }

  buildCharts() {
    this.charts.push({
      name: this.chartTitle,
      params: {parameter: this.parameter},
      chartType: this.getChartType(),
      target: this.getTarget()
    });
  }

  getChartType() {
    return this.allChartTypes.find(chartType => chartType.key === this.chartType);
  }

  getTarget(): Target {
    return {
      name: this.targetName,
      location: new Location(),
      metrics: [new Metric()],
    }
  }

  saveDetails() {
    this.buildCharts();
    this.charts.forEach(chart => {
      chart.target.metrics = [];
      this.buildMetrics(chart);
      this.dataService.addLocation(chart.target.location).subscribe(response => {
        chart.target.location = response;
        this.dataService.addTarget(chart.target).subscribe(response => {
          chart.target = response;
          this.dataService.addChart(chart).subscribe(response => {
            this.newDashboard.charts?.push(response);
          });
        })
      });
    });
    this.buildData();
    this.saveDashboard();
  }

  buildMetrics(chart: Chart) {
    chart.target.metrics.forEach(metric => {
      this.dataService.addMetric(metric).subscribe(response => {
        chart.target.metrics.push(response);
      });
    });
  }

  saveDashboard() {
    this.dataService.addDashboard(this.newDashboard).subscribe(response => {
      this.newDashboardEmitter.emit(response.id);
      this.visible = false;
    });
  }

  buildData() {
    this.saveDashboardLayout();
    this.saveDashboardTeam();
  }

  saveDashboardLayout() {
    this.dataService.addLayout(new Layout()).subscribe(response => {
      const data: any = response;
      this.newDashboard.layout = data;
    })
  }

  saveDashboardTeam() {
    this.dataService.addTeam(new Team()).subscribe(response => {
      const data: any = response;
      this.newDashboard.team = data;
    })
  }
}

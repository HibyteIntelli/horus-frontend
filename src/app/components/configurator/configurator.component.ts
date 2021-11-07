import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Chart, Dashboard, Layout, Metric, Target, Team, Location, ChartType} from "../../types";
import {DataService} from "../../services/data.service";
import {delay} from "rxjs";

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
  formattedCharts: Chart[] = [];
  layout: Layout;

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
    console.log(this.chartType)
    console.log(this.allChartTypes.find(chartType => chartType.key === this.chartType));
    console.log(this.allChartTypes);
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
    this.parseAndChangesChartData();
  }

  parseAndChangesChartData() {
    this.newDashboard.charts = [];
    this.charts.forEach(chart => {
      // @ts-ignore
      chart.target.metrics = [];
      this.buildMetrics(chart);
      // @ts-ignore
      this.dataService.addLocation(chart.target.location)
        .subscribe(response => {
          // @ts-ignore
          chart.target.location = response;
          // @ts-ignore
          this.dataService.addTarget(chart.target).subscribe(response => {
            chart.target = response;
            this.dataService.addChart(chart).subscribe(response => {
              this.newDashboard.charts.push(response);
            });
          })

        });
    });
    this.buildData();
    setTimeout(() => {
      this.saveDashboard();
    }, 1000);
  }

  buildMetrics(chart: Chart) {
    // @ts-ignore
    chart.target.metrics.forEach(metric => {
      this.dataService.addMetric(metric).subscribe(response => {
        // @ts-ignore
        chart.target.metrics.push(response);
      });
    });
  }

  saveDashboard() {
    this.dataService.addDashboard(this.newDashboard).toPromise().then(response => {
      // @ts-ignore
      this.newDashboardEmitter.emit(response.id);
      this.visible = false;
    });
  }

  getNewDashboardCharts() {
    this.newDashboard.charts = this.formattedCharts;
    this.formattedCharts.forEach(chart => this.newDashboard.charts.push(chart));
  }

  buildData() {
    this.newDashboard.layout = this.layout;
    this.saveDashboardTeam();
  }

  saveDashboardTeam() {
    this.dataService.addTeam(new Team()).toPromise().then(response => {
      this.newDashboard.team = response;
    })
  }
}

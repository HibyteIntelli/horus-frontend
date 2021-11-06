import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data.service";
import {Dashboard} from "../../types";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  dashboardId: number;
  dashboard: Dashboard;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.queryParams.subscribe(response => this.dashboardId = response['id']);
  }

  ngOnInit(): void {
    this.dataService.getDashboardById(this.dashboardId).subscribe(response => {
      this.dashboard = response;
      console.log(this.dashboard);
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data.service";
import {Dashboard} from "../../types";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {


  editMode: boolean;
  dashboardId: number;
  dashboard: Dashboard;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.queryParams.subscribe(response => {
      this.dashboardId = response['id'];
      this.editMode = response['editMode'];
    });
  }

  ngOnInit(): void {
    this.dataService.getDashboardById(this.dashboardId).subscribe(response => {
      this.dashboard = response;
    });
    if (this.editMode) {
      this.setSmallContainersSize();
      this.setLargeContainersSize();
    }
  }

  setSmallContainersSize() {
    // @ts-ignore
    document.getElementById('small-container1').style.width = `${window.innerWidth / 4}px`;
    // @ts-ignore
    document.getElementById('small-container2').style.width = `${window.innerWidth / 4}px`;
  }

  setLargeContainersSize() {
    // @ts-ignore
    document.getElementById('large-container1').style.width = `${window.innerWidth / 2}px`;
    // @ts-ignore
    document.getElementById('large-container2').style.width = `${window.innerWidth / 2}px`;
  }

}

import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Dashboard} from "../../types";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  dashboards: Dashboard[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllDashboards().subscribe(response => this.dashboards = response);
  }

}

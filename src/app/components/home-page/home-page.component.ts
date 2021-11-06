import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Dashboard} from "../../types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  dashboards: Dashboard[] = [];

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit(): void {
    this.dataService.getAllDashboards().subscribe(response => this.dashboards = response);
  }

  goToNewDashboardPage($event: any) {
    this.router.navigate([`dashboard`], {queryParams: {id: $event, editMode: true}});
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Dashboard} from "../../types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-data-card',
  templateUrl: './dashboard-data-card.component.html',
  styleUrls: ['./dashboard-data-card.component.css']
})
export class DashboardDataCardComponent implements OnInit {

  @Input()
  dashboard: Dashboard;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDashboard(){
    this.router.navigate([`dashboard`], {queryParams: {id: this.dashboard.id}});
  }

}

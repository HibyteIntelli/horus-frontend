import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Chart, ChartType, Dashboard, Target, Location, Metric, Layout, Team} from "../types";
import {BehaviorSubject, Observable, Observer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  getAllDashboards(){
    return this.httpClient.get<Dashboard[]>(`${environment.apiUrl}/api/scope/${environment.scopeKey}/items/dashboard`);
  }

  getDashboardById(id: number){
    return this.httpClient.get<Dashboard>(`${environment.apiUrl}/api/scope/${environment.scopeKey}/item/${id}`);
  }

  addDashboard(dashboard: Dashboard) {
    return this.httpClient.post<Dashboard>(`${environment.apiUrl}/api/scope/${environment.scopeKey}/items/dashboard`, dashboard);
  }

  addChart(chart: Chart) {
    return this.httpClient.post<Chart>(`${environment.apiUrl}/api/scope/${environment.scopeKey}/items/chart`, chart);
  }

  addTarget(target: Target) {
    return this.httpClient.post<Target>(`${environment.apiUrl}/api/scope/${environment.scopeKey}/items/target`, target);
  }

  getAllChartTypes() {
    return this.httpClient.get<ChartType[]>(`${environment.apiUrl}/api/scope/${environment.scopeKey}/items/chartType`);
  }

  addLocation(location: Location | undefined){
    return this.httpClient.post<Location>(`${environment.apiUrl}/api/scope/${environment.scopeKey}/items/location`, location);
  }

  addMetric(metric: Metric) {
    return this.httpClient.post<Metric>(`${environment.apiUrl}/api/scope/${environment.scopeKey}/items/metric`, metric);
  }

  addLayout(layout: Layout){
    return this.httpClient.post<Layout>(`${environment.apiUrl}/api/scope/${environment.scopeKey}/items/layout`, layout);
  }

  addTeam(team: Team) {
    return this.httpClient.post<Team>(`${environment.apiUrl}/api/scope/${environment.scopeKey}/items/team`, team);
  }

  getChartById(id: any) {
    return this.httpClient.get<Chart[]>(`${environment.apiUrl}/api/scope/${environment.scopeKey}/item/${id}`);
  }

  getLayouts() {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/api/scope/${environment.scopeKey}/items/layout`);
  }

  getGaugeValue(chartIdent: number) {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/scope/${environment.scopeKey}/chart/circularGauge?chartId=${chartIdent}`);
  }

  getLineChartValues(chartIdent: number) {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/scope/${environment.scopeKey}/chart/lineSeries?chartId=${chartIdent}`);
  }

  getRangeChartValues(chartIdent: number) {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/scope/${environment.scopeKey}/chart/rangeSeries?chartId=${chartIdent}`);
  }
}

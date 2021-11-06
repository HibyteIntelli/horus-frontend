import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Dashboard} from "../types";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getAllDashboards(){
    return this.httpClient.get<Dashboard[]>(`${environment.apiUrl}/api/scope/${environment.scopeKey}/items/dashboard`);
  }

  getDashboardById(id: number){
    return this.httpClient.get<Dashboard>(`${environment.apiUrl}/api/scope/${environment.scopeKey}/item/${id}`);
  }

  addDashboard(dashboard: Dashboard) {
    return this.httpClient.post(`${environment.apiUrl}/api/scope/${environment.scopeKey}/items/dashboard`, dashboard);
  }
}

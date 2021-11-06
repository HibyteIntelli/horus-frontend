import {Component, Input, OnInit} from '@angular/core';
import {Dashboard} from "../../types";

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {

  @Input()
  visible = false;

  noOfDisplays = 1;

  newDashboard: Dashboard;

  constructor() {
  }

  ngOnInit(): void {
  }

  addConfiguration(){
    this.noOfDisplays++;
  }

  saveDetails(){
    console.log(this.newDashboard);
  }

}

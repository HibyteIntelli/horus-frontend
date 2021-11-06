import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {

  @Input()
  visible = false;

  noOfDisplays = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  addConfiguration(){
    this.noOfDisplays++;
  }

  saveDetails(){}

}

import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-bar-gauge',
  templateUrl: './bar-gauge.component.html',
  styleUrls: ['./bar-gauge.component.css']
})
export class BarGaugeComponent implements OnInit {

  @Input()
  id: number;

  data: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  getData() {
    this.dataService.getBarRangeValues(this.id).subscribe(response => {
      this.data = response.data;
    });
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-circular-gauge',
  templateUrl: './circular-gauge.component.html',
  styleUrls: ['./circular-gauge.component.css']
})
export class CircularGaugeComponent implements OnInit {

  @Input()
  id: number;

  data: any;

  size = {
    width: '600px',
    height: '200px'
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log('circular_gauge');
  }


  getData() {
    this.dataService.getGaugeValue(this.id).subscribe(response => this.data = response.data.value);
  }

}

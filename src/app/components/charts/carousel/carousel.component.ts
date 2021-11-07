import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {TargetSat} from "../../../types";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input()
  id: number;
  constructor(private dataService: DataService) { }
  imgs: string[];
  ngOnInit(): void {
      this.imgs = [
        "assets/poza1.jpg",
        "assets/poza2.jpg",
        "assets/poza3.jpg"
      ]
  }

}

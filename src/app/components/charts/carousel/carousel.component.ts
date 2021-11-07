import {Component, Input, OnInit} from '@angular/core';

import {DataService} from "../../../services/data.service";
import {TargetSat} from "../../../types";
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  imgs = [];

  @Input()
  id: number;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {

    this.dataService.getImages(799).subscribe(res => {
      console.log('aici');
      let ss = res as Array<TargetSat>;
      console.log(ss[0].assets);
      this.imgs = ss[0].assets;
    });

  }

}

import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input()
  visible: boolean

  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  locationMarker: google.maps.Marker;

  constructor() {
  }

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap() {

    const loader = new Loader({
      apiKey: 'AIzaSyCUei_u9AxSBwMcQCBomE2TYdX2YGbeVb0'
    });
    if (this.visible) {
      loader.load().then(() => {
        const initialLocation = {lat: 45.75372, lng: 21.22571};
        this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
          center: initialLocation,
          zoom: 10
        });
      });
    }
  }

}

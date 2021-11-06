import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";
import {styles} from "./mapstyles";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  title = 'google-maps';

  private map: google.maps.Map

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyBR6A65P_BM9v4JMyY1ySFlWmwZghK0Fm0'
    })

    loader.load().then(() => {
      console.log('loaded gmaps')

      const location = { lat: 51.233334, lng: 	6.783333 }

      // @ts-ignore
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 6,
        styles: styles
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    })
  }

}

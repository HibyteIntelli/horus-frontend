import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";
import {styles} from "./mapstyles";
import DirectionsService = google.maps.DirectionsService;
import DirectionsRenderer = google.maps.DirectionsRenderer;
import {Location, LocationPoint, Target, TargetSat} from "../../types";
import {DataService} from "../../services/data.service";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnChanges {

  constructor(public service: DataService) { }

  title = 'google-maps';

  @Input()
  visible: boolean;
  private map: google.maps.Map;
  private infowindow: google.maps.InfoWindow;
  private listOfPoints: LocationPoint[];
  name: string ='';

  ngOnInit(): void {

  }

  initializeMap() {
  this.listOfPoints = [];
    this.infowindow = new google.maps.InfoWindow();
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer({
      suppressPolylines: true,
      infoWindow: this.infowindow
    });

    let loader = new Loader({
      apiKey: 'AIzaSyBR6A65P_BM9v4JMyY1ySFlWmwZghK0Fm0'
    })

    loader.load().then(() => {

      let location = { lat: 51.233334, lng: 	6.783333 }
      // @ts-ignore
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 6,
        styles: styles
      })
      directionsDisplay.setMap(this.map);

      this.map?.addListener("click", (mapsMouseEvent: any) => {
        this.createMarker(mapsMouseEvent.latLng);
        this.infowindow = new google.maps.InfoWindow({
          position: mapsMouseEvent.latLng,
        });
      });
      // this.calculateAndDisplayRoute(directionsService, directionsDisplay, this.map, infowindow);
    })
  }

  addPoints() {
    if(this.name != '') {
      let ts = new Target();
      let lc = new Location();
      ts.location = lc;
      ts.location.points = this.listOfPoints;
      ts.location.name = this.name;
      this.service.addTarget(ts);
    }

  }

  createMarker(location: google.maps.LatLng) {
    let data = new LocationPoint();
    data.latitude = location.lat().toLocaleString();
    data.longitude = location.lng().toLocaleString();
    console.log(data)
    this.listOfPoints.push(data);
    console.log(this.listOfPoints);
    new google.maps.Marker({
      position: location,
      map: this.map,
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['visible']) {
      this.initializeMap();
    }
  }

  calculateAndDisplayRoute(directionsService: DirectionsService, directionsDisplay: DirectionsRenderer, map: google.maps.Map, infowindow: google.maps.InfoWindow) {
    let waypts = [{
      location: '41.062317, 28.899756',
      stopover: true
    }, {
      location: '41.062276, 28.898866',
      stopover: true
    }, {
      location: '41.061993, 28.8982',
      stopover: true
    }];
    directionsService.route({
      origin: {
        lat: 41.063328,
        lng: 28.901215
      },
      destination: {
        lat: 41.060756,
        lng: 28.900046
      },
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {

      //anonymous
      function renderDirectionsPolylines(response: google.maps.DirectionsResult) {
        let polylineOptions = {
          strokeColor: '#C83939',
          strokeOpacity: 1,
          strokeWeight: 4
        };
        let colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
        let polylines: Array<any> = [];
        let bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < polylines.length; i++) {
          polylines[i].setMap(null);
        }
        let legs = response.routes[0].legs;
        for (i = 0; i < legs.length; i++) {
          let steps = legs[i].steps;
          for (var j = 0; j < steps.length; j++) {
            let nextSegment = steps[j].path;
            let stepPolyline = new google.maps.Polyline(polylineOptions);
            stepPolyline.setOptions({
              strokeColor: colors[i]
            })
            for (var k = 0; k < nextSegment.length; k++) {
              stepPolyline.getPath().push(nextSegment[k]);
              bounds.extend(nextSegment[k]);
            }
            polylines.push(stepPolyline);
            stepPolyline.setMap(map);
            // route click listeners, different one on each step
            google.maps.event.addListener(stepPolyline, 'click', function(evt: any) {
              infowindow.setContent("you clicked on the route<br>" + evt.latLng.toUrlValue(6));
              infowindow.setPosition(evt.latLng);
              infowindow.open(map);
            })
          }
        }
        map.fitBounds(bounds);
      }

      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setOptions({
          directions: response,
        })
        if(response != null) {
          let route = response.routes[0];
          renderDirectionsPolylines(response);
        }
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}

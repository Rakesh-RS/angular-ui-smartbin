import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mymap',
  templateUrl: './mymap.component.html',
  styleUrls: ['./mymap.component.scss']
})
export class MymapComponent implements OnInit {
  title: string = 'Map project';
  latitude: number;
  longitude: number;
  zoom:number;

  constructor() { }

  ngOnInit(): void {
    this.setCurrentLocation();
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
  
}
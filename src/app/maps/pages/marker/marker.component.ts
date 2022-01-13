import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarkerColor {
  color:string;
  marker?: mapboxgl.Marker;
  center?:[number,number]
}

@Component({
  selector: 'app-marker',
  templateUrl:'./marker.component.html',
  styles: [`
    .mapa-container{width:100%; height: 100vh;}
    .list-group{
      position:fixed;
      top:20px;
      right:20px;
      z-index:999;
      cursor:pointer;
    }
  `]
})

export class MarkerComponent implements AfterViewInit {
  @ViewChild('mapa') divMapa!:ElementRef
  nivelZoom:number = 15;
  mapa!: mapboxgl.Map;
  center:[number, number] = [-71.45294389061807, 10.406541289771356]
  markers: MarkerColor[] = []

  constructor() { }
  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.nivelZoom
    });

    const marker = new mapboxgl.Marker()
  }


  goMarker(location:mapboxgl.Marker){
    console.log();
    
    this.mapa.flyTo({center: location.getLngLat()})
  }

  addMarker(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const newMarker = new mapboxgl.Marker({
      draggable:true,
      color
    })
    .setLngLat(this.center)
    .addTo(this.mapa)
    this.markers.push({color,marker:newMarker})
    this.saveMarker()
  }


  saveMarker(){
    const lngLatArr:MarkerColor[] = []
    this.markers.forEach( m =>{
      const color = m.color
      const { lng, lat } = m.marker!.getLngLat()
      lngLatArr.push({color, center:[lng, lat]})
    })

    localStorage.setItem('markers', JSON.stringify(lngLatArr))
  }

}

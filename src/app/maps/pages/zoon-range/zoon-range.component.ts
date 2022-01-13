import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from "mapbox-gl";

@Component({
  selector: 'app-zoon-range',
  templateUrl:'./zoon-range.component.html',
  styles: [`
  .mapa-container{width:100%; height: 100vh;}
  .row{
    width:400px;
    background-color:white;
    border-radius:6px;
    position:fixed;
    bottom:50px;
    left:50px;
    padding:10px;
    z-index:999;
  }
  `]
})
export class ZoonRangeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapa') divMapa!:ElementRef 
  nivelZoom:number = 10;
  mapa!: mapboxgl.Map;
  center:[number, number] = [-71.45294389061807, 10.406541289771356]

  constructor() { }
  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {})
    this.mapa.off('zoomend', () => {})
    this.mapa.off('move', () => {})
  }

  ngAfterViewInit(): void {
    console.log(this.divMapa);
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.nivelZoom
    });


    this.mapa.on('zoom', (e) =>{
      this.nivelZoom = this.mapa.getZoom()
    })

    this.mapa.on('zoomend', (e) =>{
      if(this.mapa.getZoom() > 18) this.mapa.zoomTo(18)
    })

    this.mapa.on('move', (e) =>{
      const target = e.target;
      const { lng, lat } = target.getCenter()
      this.center = [lng, lat]
    })
  }



  zoomIn(){
    this.mapa.zoomIn()
  }

  zoomOut(){
    this.mapa.zoomOut()
  }

  changeZoom(e:string){
    this.mapa.zoomTo(parseInt(e))
  }

}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from "mapbox-gl";


@Component({
  selector: 'app-full-screen',
  templateUrl:'./full-screen.component.html',
  styles: [``]
})
export class FullScreenComponent implements OnInit {
  @ViewChild('mapa') divMapa!:ElementRef

  constructor(){}

  ngOnInit(): void {
    //   var map = new mapboxgl.Map({
    //   container: 'mapa',
    //   style: 'mapbox://styles/mapbox/streets-v11',
    //   center:[ -71.45052990255711, 10.40627748076794],
    //   zoom: 18
    // });
  }

}

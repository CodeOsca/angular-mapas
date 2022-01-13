import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta:string;
  text:string;
}

@Component({
  selector: 'app-menu',
  templateUrl:'./menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  menu:MenuItem[] = [
    { ruta:'mapas/fullscreen', text:'Pantalla completa' },
    { ruta:'mapas/marcadores', text:'Marcadores' },
    { ruta:'mapas/propiedades', text:'Propiedades' },
    { ruta:'mapas/zoom-range', text:'Acercar' },
  ]



  constructor() { }
  ngOnInit(): void {}

}

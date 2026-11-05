import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: false,
  styleUrl: './slider.css',
  templateUrl: './slider.html',
})
export class Slider implements AfterViewInit {

  menu = [
    {
      id: 1,
      img: '/img/mueble1.png',
      titulo: 'Sofa de cuarzo',
      descripcion: 'Diseño de primera calidad de mueble',
      activo: true,
    },
    {
      id: 2,
      img: '/img/mueble2.png',
      titulo: 'Sofa blanco',
      descripcion: 'Diseño de primera calidad de mueble',
      activo: true,
    },
    {
      id: 3,
      img: '/img/mueble3.png',
      titulo: 'Sofa de alta costura',
      descripcion: 'Diseño de primera calidad de mueble',
      activo: true,
    },
    {
      id: 4,
      img: '/img/mueble4.png',
      titulo: 'Sofa delux',
      descripcion: 'Diseño de primera calidad de mueble',
      activo: true,
    },
  ];

  titulo = 'Muebles de temporada';
  subtitulo = 'Colección elegante';
  slogan = 'Diseños para cada rincón de tu hogar';



  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}

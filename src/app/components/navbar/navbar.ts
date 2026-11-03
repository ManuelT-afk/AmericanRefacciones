import { Component, signal, AfterViewInit, OnInit } from '@angular/core';
import $ from 'jquery';
declare const M: any;

@Component({
  selector: 'app-navbar',
  standalone: false,
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar implements AfterViewInit, OnInit {
  protected readonly tittle = signal('American Refacciones');
  navbar = 'Inicio';
  slider = 'Ver mas';
  productos = 'Productos';
  contacto = 'Contacto';
  footer = 'Redes Sociales';


  ngOnInit(): void {

  }



  ngAfterViewInit(): void {
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, {
      edge: 'left',
      draggable: true
    });

  }
}

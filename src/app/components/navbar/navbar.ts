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
    throw new Error('Method not implemented.');
  }



  ngAfterViewInit(): void {
    const sidenavEls = document.querySelectorAll('.sidenav');

    if (typeof M !== 'undefined' && sidenavEls.length > 0) {
      M.AutoInit();
      M.Sidenav.init(sidenavEls, { edge: 'left' });

    }

  }
}

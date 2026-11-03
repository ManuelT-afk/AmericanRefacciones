import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Slider } from './components/slider/slider';
import { Productos } from './components/productos/productos';
import { Contacto } from './components/contacto/contacto';
import { Footer } from './components/footer/footer';

@NgModule({
  declarations: [App, Navbar, Slider, Productos, Contacto, Footer],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App, Navbar, Slider, Productos, Contacto, Footer],
})
export class AppModule { }

// src/app/app.module.ts
// Autor: [Tu nombre]
// Descripción: Módulo principal de la aplicación

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';  // 🔥 IMPORTANTE PARA ngModel

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Importar las páginas que creamos
import { InicioPageModule } from './pages/inicio/inicio.module';
import { InformacionPersonalPageModule } from './pages/informacion-personal/informacion-personal.module';
import { ContactoPageModule } from './pages/contacto/contacto.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,  // 🔥 Agregar FormsModule aquí
    InicioPageModule,
    InformacionPersonalPageModule,
    ContactoPageModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
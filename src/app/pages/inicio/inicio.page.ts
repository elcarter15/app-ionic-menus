// src/app/pages/inicio/inicio.page.ts
// Autor: [Tu nombre]
// Descripción: Página de inicio

import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButtons, IonMenuButton, IonIcon, IonCard,
  IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonCardContent 
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonMenuButton, IonIcon, IonCard,
    IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent
  ]
})
export class InicioPage {
  constructor() {}
}
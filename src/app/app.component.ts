// src/app/app.component.ts
// Autor: [Tu nombre]
// Descripción: Componente principal con el menú lateral y configuración de rutas

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { 
  IonApp, IonRouterOutlet, IonMenu, IonHeader, 
  IonToolbar, IonTitle, IonContent, IonList, 
  IonItem, IonLabel, IonIcon 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, personOutline, mailOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    IonApp, IonRouterOutlet, IonMenu, IonHeader,
    IonToolbar, IonTitle, IonContent, IonList,
    IonItem, IonLabel, IonIcon
  ]
})
export class AppComponent {
  constructor() {
    // Registrar los iconos que usaremos en el menú
    addIcons({ homeOutline, personOutline, mailOutline });
  }
}
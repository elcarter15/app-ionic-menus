// src/app/pages/informacion-personal/informacion-personal.page.ts
// Autor: Yimi J. Cardozo R.

import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButtons, IonMenuButton, IonAvatar, IonList,
  IonItem, IonIcon, IonLabel, IonInput, 
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, 
  IonButton
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { 
  personOutline, 
  calendarOutline, 
  mailOutline, 
  saveOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.page.html',
  styleUrls: ['./informacion-personal.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonMenuButton, IonAvatar, IonList,
    IonItem, IonIcon, IonLabel, IonInput,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonButton
  ]
})
export class InformacionPersonalPage {
  nombre: string = '';
  edad: any = '';
  correo: string = '';
  
  nombreGuardado: string = '';
  edadGuardado: any = '';
  correoGuardado: string = '';
  mostrarDatosGuardados: boolean = false;

  constructor() {
    // Registrar los iconos
    addIcons({
      personOutline,
      calendarOutline,
      mailOutline,
      saveOutline
    });
  }

  guardarInformacion() {
    if (!this.nombre || !this.edad || !this.correo) {
      alert('Por favor, completa todos los campos');
      return;
    }
    
    this.nombreGuardado = this.nombre;
    this.edadGuardado = this.edad;
    this.correoGuardado = this.correo;
    this.mostrarDatosGuardados = true;
    
    alert('Información guardada correctamente');
  }
}
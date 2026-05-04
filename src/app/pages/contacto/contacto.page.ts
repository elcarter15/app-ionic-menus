// src/app/pages/contacto/contacto.page.ts
// Autor: Yimi J. Cardozo R.
// Descripción: Página de contacto con iconos funcionales

import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButtons, IonMenuButton, IonAvatar, IonList,
  IonItem, IonIcon, IonLabel, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonButton
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { mailOutline, logoGithub, callOutline, sendOutline } from 'ionicons/icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonMenuButton, IonAvatar, IonList,
    IonItem, IonIcon, IonLabel, IonCard, IonCardHeader,
    IonCardTitle, IonCardContent, IonButton
  ]
})
export class ContactoPage {
  constructor() {
    // 🔥 Registrar los iconos para que se puedan usar en el HTML
    addIcons({
      mailOutline,
      logoGithub,
      callOutline,
      sendOutline
    });
  }

  enviarCorreo() {
    const destinatario = 'yimicardozo15@gmail.com';
    const asunto = 'Consulta sobre aplicación Ionic';
    const cuerpo = 'Hola, me gustaría hacer una consulta...';
    const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    window.location.href = mailtoLink;
  }
}
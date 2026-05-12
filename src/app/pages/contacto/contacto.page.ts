// src/app/pages/contacto/contacto.page.ts
// Autor: Yimi J. Cardozo R.
// Descripción: Formulario de contacto con validación de correo (obligatorio @ y .com)

import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButtons, IonMenuButton, IonAvatar, IonList,
  IonItem, IonIcon, IonLabel, IonInput, IonTextarea,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, 
  IonButton
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { personOutline, mailOutline, chatbubbleOutline, sendOutline } from 'ionicons/icons';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonMenuButton, IonAvatar, IonList,
    IonItem, IonIcon, IonLabel, IonInput, IonTextarea,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonButton
  ]
})
export class ContactoPage {
  
  contacto = {
    nombre: '',
    correo: '',
    mensaje: ''
  };
  
  mostrarTarjetaExito: boolean = false;
  ultimoEnvio = { nombre: '', correo: '', mensaje: '' };

  constructor(private toastController: ToastController) {
    addIcons({ personOutline, mailOutline, chatbubbleOutline, sendOutline });
  }

  // 🔥 VALIDACIÓN DE CORREO (creada por mí)
  validarCorreo(correo: string): boolean {
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexCorreo.test(correo);
  }

  async enviarFormulario() {
    
    // Validar campos vacíos
    if (!this.contacto.nombre || !this.contacto.correo || !this.contacto.mensaje) {
      const toast = await this.toastController.create({
        message: '⚠️ Por favor, completa todos los campos',
        duration: 2000,
        position: 'middle',
        color: 'danger',
        cssClass: 'toast-centrado toast-animado'
      });
      await toast.present();
      return;
    }
    
    // 🔥 VALIDACIÓN DEL CORREO (obligatorio @ y .com)
    if (!this.validarCorreo(this.contacto.correo)) {
      const toast = await this.toastController.create({
        message: '⚠️ Correo inválido. Debe contener "@" y terminación como .com, .es, .org',
        duration: 3000,
        position: 'middle',
        color: 'danger',
        cssClass: 'toast-centrado toast-animado'
      });
      await toast.present();
      return;
    }
    
    // Guardar copia
    this.ultimoEnvio = { ...this.contacto };
    
    // Vaciar formulario
    this.contacto = { nombre: '', correo: '', mensaje: '' };
    
    // Toast de éxito
    const toast = await this.toastController.create({
      message: '✅ ¡Mensaje enviado con éxito!',
      duration: 2500,
      position: 'middle',
      color: 'success',
      cssClass: 'toast-centrado toast-animado'
    });
    await toast.present();
    
    // Mostrar tarjeta
    this.mostrarTarjetaExito = true;
    setTimeout(() => { this.mostrarTarjetaExito = false; }, 5000);
  }
}
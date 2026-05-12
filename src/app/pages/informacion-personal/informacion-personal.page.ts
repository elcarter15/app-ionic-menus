// src/app/pages/informacion-personal/informacion-personal.page.ts
// Autor: Yimi J. Cardozo R.
// Descripción: Formulario personal con validación de correo (obligatorio @ y .com)

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
import { personOutline, calendarOutline, mailOutline, saveOutline } from 'ionicons/icons';
import { ToastController } from '@ionic/angular';

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

  constructor(private toastController: ToastController) {
    addIcons({ personOutline, calendarOutline, mailOutline, saveOutline });
  }

  // 🔥 VALIDACIÓN DE CORREO (creada por mí)
  validarCorreo(correo: string): boolean {
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexCorreo.test(correo);
  }

  async guardarInformacion() {
    
    // Validar campos vacíos
    if (!this.nombre || !this.edad || !this.correo) {
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
    
    // 🔥 VALIDACIÓN DEL CORREO
    if (!this.validarCorreo(this.correo)) {
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
    this.nombreGuardado = this.nombre;
    this.edadGuardado = this.edad;
    this.correoGuardado = this.correo;
    
    // Vaciar formulario
    this.nombre = '';
    this.edad = '';
    this.correo = '';
    
    // Toast de éxito
    const toast = await this.toastController.create({
      message: '✅ ¡Información guardada con éxito!',
      duration: 2500,
      position: 'middle',
      color: 'success',
      cssClass: 'toast-centrado toast-animado'
    });
    await toast.present();
    
    // Mostrar tarjeta
    this.mostrarDatosGuardados = true;
    setTimeout(() => { this.mostrarDatosGuardados = false; }, 5000);
  }
}
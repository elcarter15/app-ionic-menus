# Aplicación de Evaluación - Desarrollo en Ionic

![Ionic](https://img.shields.io/badge/Ionic-8.x-3880FF?logo=ionic)
![Angular](https://img.shields.io/badge/Angular-18.x-DD0031?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)

## 📋 Descripción del Proyecto

Esta aplicación ha sido desarrollada como parte de una evaluación académica para el curso de Desarrollo de Aplicaciones Móviles. La aplicación cuenta con un menú lateral que permite navegar entre tres secciones principales:

- **Inicio**: Pantalla de bienvenida con diseño moderno
- **Información Personal**: Formulario para ingresar y guardar datos personales
- **Contacto**: Información de contacto del desarrollador

## 👨‍💻 Autor

**Yimi J. Cardozo R.**  
Estudiante de Desarrollo de Aplicaciones

- 📧 Correo: yimicardozo15@gmail.com
- 🐙 GitHub: [@elcarter15](https://github.com/elcarter15)
- 📞 Teléfono: +584167193969

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| Ionic Framework | 8.x | Framework para aplicaciones móviles híbridas |
| Angular | 18.x | Framework frontend |
| TypeScript | 5.x | Lenguaje de programación |
| Capacitor | 6.x | Acceso a funcionalidades nativas |
| Ionicons | 7.x | Biblioteca de iconos |

## 📁 Estructura del Proyecto
## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── pages/
│   │   ├── inicio/               # Página de inicio
│   │   │   ├── inicio.page.ts
│   │   │   ├── inicio.page.html
│   │   │   └── inicio.page.scss
│   │   │
│   │   ├── informacion-personal/ # Formulario personal
│   │   │   ├── informacion-personal.page.ts
│   │   │   ├── informacion-personal.page.html
│   │   │   └── informacion-personal.page.scss
│   │   │
│   │   └── contacto/             # Página de contacto
│   │       ├── contacto.page.ts
│   │       ├── contacto.page.html
│   │       └── contacto.page.scss
│   │
│   ├── app.component.ts          # Componente principal con menú
│   ├── app.component.html        # Plantilla del menú lateral
│   └── app.routes.ts             # Configuración de rutas
│
├── theme/
│   └── variables.scss            # Variables de tema oscuro
│
└── index.html                    # Punto de entrada
```


## 🚀 Instalación y Ejecución

### Requisitos Previos

- Node.js (versión 18 o superior)
- npm (versión 9 o superior)
- Ionic CLI

### Pasos para ejecutar la aplicación

```bash
# 1. Clonar o descargar el proyecto
cd app-menus

# 2. Instalar dependencias
npm install

# 3. Ejecutar la aplicación en navegador
ionic serve

# 4. Abrir en navegador
# La aplicación estará disponible en http://localhost:8100

# 1. Construir la aplicación
ionic build --prod

# 2. Agregar plataforma Android
npx cap add android

# 3. Sincronizar archivos
npx cap sync android

# 4. Abrir en Android Studio
npx cap open android

# 5. En Android Studio: Build → Build Bundle(s) / APK(s) → Build APK(s)

🎨 Características Implementadas

Funcionalidades
✅ Menú lateral con 3 opciones de navegación

✅ Cierre automático del menú al seleccionar una opción

✅ Formulario de información personal con validación

✅ Almacenamiento temporal de datos ingresados

✅ Botón de contacto que abre cliente de correo

✅ Tema oscuro personalizado (gris carbón)

✅ Iconos funcionales en todas las páginas

✅ Diseño responsivo

Interfaz de Usuario
Página	Elementos
Inicio	Avatar, tarjetas de estadísticas, características, consejo del día
Información Personal	Avatar, formulario (nombre, edad, correo), botón guardar, tarjeta de confirmación
Contacto	Avatar, lista de contacto con iconos (correo, GitHub, teléfono), botón enviar correo

🐛 Errores Conocidos y Soluciones

Error: Iconos de GitHub y teléfono no aparecen
Causa: En Ionic con Standalone Components, los iconos deben registrarse manualmente.

Solución: Importar y registrar iconos en el constructor:

import { addIcons } from 'ionicons';
import { logoGithub, callOutline } from 'ionicons/icons';

constructor() {
  addIcons({ 'logo-github': logoGithub, 'call-outline': callOutline });
}

Error: "ion-avatar is not a known element"
Causa: Falta importar el componente en la página.

Solución: Agregar IonAvatar al array imports del componente.

📊 Capturas de Pantalla

Menú Lateral
https://screenshots/menu.png

Página de Inicio
https://screenshots/inicio.png

Página de Información Personal
https://screenshots/informacion-personal.png

Página de Contacto
https://screenshots/contacto.png

🔄 Versiones

Versión	Fecha	Cambios
1.0.0	[04/08/2026]	Versión inicial con 3 menús, formulario y contacto

📝 Licencia

Este proyecto ha sido desarrollado con fines educativos como parte de una evaluación académica.

🙏 Agradecimientos

Al profesor del curso de Desarrollo de Aplicaciones por la guía y enseñanza

A la comunidad de Ionic Framework por la documentación y soporte

A compañeros de clase por compartir soluciones a errores comunes

📞 Contacto

Si tienes preguntas sobre este proyecto, puedes contactarme a través de:

Correo: yimicardozo15@gmail.com

GitHub: github.com/elcarter15

Teléfono: +584167193969

🎓 Reflexión Final

Este proyecto me permitió aplicar los conocimientos adquiridos durante el curso. Aprendí a manejar la navegación en Ionic, trabajar con formularios y binding de datos, gestionar iconos personalizados, implementar un tema oscuro y resolver errores comunes de desarrollo. La experiencia fue un desafío pero también una gran oportunidad de aprendizaje.


# 🚀 Management Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![SweetAlert](https://img.shields.io/badge/SweetAlert-FF6384?style=for-the-badge&logo=sweetalert&logoColor=white)

Interfaz de usuario para el sistema de gestión de usuarios y posiciones desarrollado como parte del proyecto de Herramientas de Programación III. Esta aplicación implementa un CRUD completo con autenticación basada en roles.

👉 **Repositorio del backend:** [Management Backend](https://github.com/nykt3r/management-backend)

---

## 📋 Tabla de Contenidos

- [🚀 Management Backend](#-management-backend)
  - [📋 Tabla de Contenidos](#-tabla-de-contenidos)
  - [📝 Descripción](#-descripción)
  - [🔐 Funcionalidades Principales](#-funcionalidades-principales)
  - [🧰 Tecnologías Utilizadas](#-tecnologías-utilizadas)
  - [📂 Estructura del Proyecto](#-estructura-del-proyecto)
  - [📦 Instalación](#-instalación)
    - [Requisitos Previos](#requisitos-previos)
    - [Pasos](#pasos)
  - [🔒 Seguridad y Autenticación](#-seguridad-y-autenticación)
  - [📸 Capturas de Pantalla](#-capturas-de-pantalla)
    - [Pantalla de Login](#pantalla-de-login)
    - [Dashboard de Usuarios y Puesto](#dashboard-de-usuarios-y-puesto)
    - [Modal de creación de Usuario y Puesto](#modal-de-creación-de-usuario-y-puesto)
    - [Modal de Edición de Usuario y position](#modal-de-edición-de-usuario-y-position)
  - [👥 Autores](#-autores)

---

## 📝 Descripción

El sistema permite gestionar usuarios y sus posiciones dentro de una empresa a través de una interfaz intuitiva y responsiva. Solo usuarios autenticados con roles de **admin** o **supervisor** pueden acceder al sistema.

⚠️ **Nota importante:** Es necesario tener el backend corriendo previamente para que el frontend funcione correctamente y pueda comunicarse con la API.

---

## 🔐 Funcionalidades Principales

- **Autenticación de Usuarios**
  - Login con validación de roles (admin/supervisor)
  - Persistencia de sesión
  - Rutas protegidas por roles
  - Logout seguro
  - Cambio de contraseña

- **Gestión de Usuarios**
  - Visualización tabulada con paginación
  - Filtros por nombre, correo y posición
  - Creación de nuevos usuarios con validación completa
  - Edición de datos de usuario existente
  - Cambio de estado (activo/inactivo)

- **Gestión de Posiciones**
  - Listado de posiciones disponibles
  - Creación de nuevas posiciones
  - Edición de posiciones existentes
  - Cambio de estado (activo/inactivo)

- **Datos estadísticos**
  - Promedio de edades
  - Rangos de edad
  - Cantidad de usuarios
  - Usuarios por cargo

- **Interfaz Responsiva**
  - Diseño adaptable a móviles y escritorio
  - Feedback visual para todas las operaciones
  - Validación de formularios en tiempo real

---

## 🧰 Tecnologías Utilizadas

- **React** - Biblioteca para construir interfaces de usuario
- **React Router** - Manejo de rutas y navegación
- **Bootstrap** - Framework CSS para diseño responsivo
- **Axios** - Cliente HTTP para realizar peticiones a la API
- **SweetAlert** - Biblioteca para mostrar alertas personalizadas
- **JWT** - Autenticación basada en tokens

---

## 📂 Estructura del Proyecto

```
management-frontend/
├── .git/
├── .gitignore
├── node_modules/
├── package-lock.json
├── package.json
├── README.md
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── App.css
    ├── App.js
    ├── functions.js
    ├── index.js
    ├── reportWebVitals.js
    ├── components/
    │   ├── dashboard/
    │   │   └── Dashboard.js
    │   ├── header/
    │   │   ├── Header.js
    │   │   └── Header.module.css
    │   ├── login/
    │   │   ├── Login.css
    │   │   └── Login.js
    │   ├── positionFormModal/
    │   │   └── PositionFormModal.js
    │   ├── resetPassword/
    │   │   └── ResetPassword.js
    │   ├── routes/
    │   │   └── ProtectedRoute.js
    │   ├── showPositions/
    │   │   └── ShowPositions.js
    │   ├── showUsers/
    │   │   ├── ShowUsers.js
    │   │   └── ShowUsers.module.css
    │   └── UserFormModal/
    │       └── UserFormModal.js
    └── services/
        └── AuthService.js
```

---

## 📦 Instalación

### Requisitos Previos
- Node.js (v14 o superior)
- NPM (v6 o superior)
- Backend del proyecto en ejecución ([Ver repositorio](https://github.com/nykt3r/management-backend.git))

### Pasos

1. **Clonar el repositorio:**

```bash
git clone https://github.com/KarenGarzonM/management-frontend.git
cd management-frontend
```

2. **Instalar dependencias:**

```bash
npm install
```

3. **Iniciar la aplicación en modo desarrollo:**

```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`.

4. **Compilar para producción:**

```bash
npm run build
```

---

## 🔒 Seguridad y Autenticación

El sistema implementa las siguientes medidas de seguridad:

- **Tokens JWT**: Almacenados en localStorage para mantener la sesión
- **Interceptores Axios**: Adjuntan automáticamente el token a todas las peticiones
- **Rutas Protegidas**: Verificación de autenticación y roles antes de mostrar contenido
- **Validaciones**: Todos los formularios incluyen validación tanto de cliente como de servidor
- **Retroalimentación**: Alertas y mensajes claros al usuario sobre el estado de las operaciones

---

## 📸 Capturas de Pantalla

### Pantalla de Login
![image](https://github.com/user-attachments/assets/60c741cf-3939-4506-b4f5-873113a07376)
*Interfaz de autenticación con validación de campos y feedback visual*

### Dashboard de Usuarios y Puesto
![image](https://github.com/user-attachments/assets/b29f4615-7893-4d53-8dde-3c11f9b73415)
![image](https://github.com/user-attachments/assets/860e71e4-83c9-4c60-8505-27225d0cec27)
*Tabla de usuarios y puesto con opciones de filtrado y acciones CRUD*

### Modal de creación de Usuario y Puesto
![image](https://github.com/user-attachments/assets/0280dce4-5f6c-45fa-8e34-070ce0bd0516) 
![image](https://github.com/user-attachments/assets/afacd909-43e7-4d72-adb6-b6f80cd4e491)

*Formulario para crear usuarios o puesto con validación en tiempo real*

### Modal de Edición de Usuario y position
![image](https://github.com/user-attachments/assets/c3bcf7ad-b8ff-4690-964f-45ae5bf1ce4b) 
![image](https://github.com/user-attachments/assets/67767ae7-2e49-4bc7-9224-591e54b1abac)

*Formulario para editar información de usuarios y puesto con validación en tiempo real*

### Pantalla de cambio de contraseña
![image](https://github.com/user-attachments/assets/8270a45f-5649-4581-9cfb-1eca90ca4c75)
![image](https://github.com/user-attachments/assets/5dff983c-710f-46dc-a6de-3feb8e4ccd71)
*Interfaz de recuperacion de contraseña por medio del numero telefonico*

### Dashboard de metricas estadisticas
![image](https://github.com/user-attachments/assets/07784854-41d3-4bcf-a2b2-17ae12e04efa)

*Interfaz para metricas estadisticas en diferentes campos del la bd*
---

## 👥 Autores

- [**Juan Jose Alvarez Gonzalez**](https://github.com/nykt3r)
- [**Jarol Stiben Paria Ramírez**](https://github.com/JarolParia)
- [**Karen Daniela Garzón Morales**](https://github.com/KarenGarzonM)

Todos los desarrolladores participaron activamente en el diseño y desarrollo del **frontend** y **backend** del sistema Management.

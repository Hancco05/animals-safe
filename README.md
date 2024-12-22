# Proyecto Django: Cuidado de Animales

Este documento proporciona una descripción general del proyecto **Cuidado de Animales**, incluyendo su estructura, funcionalidades y cómo configurarlo.

---

## Descripción del Proyecto
El proyecto **Cuidado de Animales** es una aplicación web desarrollada con Django que permite gestionar información sobre animales rescatados. Incluye funcionalidades como un chatbot interactivo y vistas para administrar el contenido del sitio.

---

## Requisitos Previos

1. Python 3.8 o superior.
2. Node.js (para funcionalidades relacionadas con el chatbot).
3. Django 4.x.
4. Un entorno virtual configurado para Python.
5. Git (opcional para control de versiones).

---

## Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_del_repositorio>
   cd cuidado-animales
   ```

2. **Crear y activar un entorno virtual:**
   ```bash
   python -m venv env
   source env/bin/activate  # Linux/macOS
   env\Scripts\activate  # Windows
   ```

3. **Instalar las dependencias:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configurar las migraciones de base de datos:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Ejecutar el servidor de desarrollo:**
   ```bash
   python manage.py runserver
   ```

6. **Configurar y ejecutar el chatbot (opcional):**
   ```bash
   cd bot
   node bot.js
   ```

---

## Estructura del Proyecto

```
Cuidado-Animales/
|-- bot/                        # Funcionalidades del bot interactivo
|   |-- bot.js                  # Archivo principal del bot
|-- main/                       # Aplicación principal de Django
|   |-- migrations/             # Migraciones de base de datos
|   |-- templates/              # Plantillas HTML
|   |   |-- base.html           # Plantilla base
|   |   |-- index.html          # Página principal
|   |-- views.py                # Vistas principales
|   |-- models.py               # Modelos de base de datos
|   |-- urls.py                 # URLs específicas de la app
|-- static/                     # Archivos estáticos (CSS, JS, imágenes)
|   |-- assets/                 # Contiene logo.png y otros activos
|-- templates/                  # Plantillas globales
|-- manage.py                   # Archivo principal de gestión de Django
|-- requirements.txt            # Dependencias del proyecto
```

---

## Funcionalidades Principales

### 1. **Página Principal**
   - Muestra información básica sobre el proyecto.
   - Incluye un logo dinámico y una barra de navegación.

### 2. **Chatbot**
   - Bot interactivo que responde a preguntas básicas sobre el sitio web.
   - Implementado con Node.js y conectado al proyecto Django.

### 3. **Administración de Animales**
   - CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de animales rescatados.

### 4. **Panel de Administración**
   - Gestión avanzada de datos a través del panel de administración de Django.

---

## Esquema del Proyecto

### Modelo de Datos
El modelo principal incluye:

- **Animal**:
  - `id`: Identificador único.
  - `nombre`: Nombre del animal.
  - `especie`: Especie a la que pertenece.
  - `fecha_rescate`: Fecha de rescate.
  - `estado`: Estado actual (adoptado, en refugio, etc.).

### Flujo de Trabajo

1. El usuario accede a la página principal y navega por las distintas vistas.
2. El chatbot puede responder preguntas simples e interactuar con el usuario.
3. Los administradores pueden gestionar animales desde el panel de administración.
4. Las modificaciones en el bot se gestionan desde el directorio `bot/` y se integran al sitio principal.

---

## Pruebas

### Pruebas Unitarias
1. Crear pruebas en el archivo `tests.py` dentro de la app `main`:
   ```python
   from django.test import TestCase

   class AnimalModelTest(TestCase):
       def test_creacion_animal(self):
           animal = Animal.objects.create(
               nombre="Firulais",
               especie="Perro",
               fecha_rescate="2024-01-01",
               estado="En refugio"
           )
           self.assertEqual(animal.nombre, "Firulais")
   ```
2. Ejecutar pruebas:
   ```bash
   python manage.py test
   ```

---

## Soporte
Para soporte técnico, contacta al administrador del proyecto o revisa la documentación oficial de Django en [https://docs.djangoproject.com/](https://docs.djangoproject.com/).

---

**Fin del documento**.


---
title: Microservicio Audioguia
description: Gestiona la creación, edición, eliminación y consulta de audioguías asociadas a checkpoints, almacenando datos como título, URL de la audioguía e ID del checkpoint correspondiente.
---
# Documentación del Controlador de Audioguías

## Introducción

Este controlador permite gestionar las audioguías asociadas a puntos de control. Proporciona funcionalidades para obtener, crear, editar y eliminar audioguías.

## Endpoints

### 1. Obtener Todas las Audioguías

- **Método:** `GET`
- **Ruta:** `/api/audioguia`
- **Descripción:** Recupera todas las audioguías almacenadas en la base de datos.
- **Respuesta:**
  - **Código 200:** Devuelve un array de audioguías.
  - **Código 500:** Error del servidor.

### 2. Crear una Nueva Audioguía

- **Método:** `POST`
- **Ruta:** `/api/audioguia`
- **Descripción:** Crea una nueva audioguía asociada a un checkpoint.
- **Cuerpo de la Solicitud:**
  ```json
  {
    "id_checkpoint": "int",
    "title": "string",
    "url_audioguia": "string"
  }
  ```
- **Respuesta:**
  - **Código 201:** Devuelve la audioguía creada.
  - **Código 404:** Si el checkpoint no existe.
  - **Código 500:** Error al crear la audioguía.

### 3. Editar una Audioguía

- **Método:** `PUT`
- **Ruta:** `/api/audioguia/{id}`
- **Descripción:** Edita una audioguía existente.
- **Parámetros de Ruta:**
  - `id`: ID de la audioguía a editar.
- **Cuerpo de la Solicitud:**
  ```json
  {
    "title": "string",
    "url_audioguia": "string",
    "id_checkpoint": "int"
  }
  ```
- **Respuesta:**
  - **Código 200:** Devuelve la audioguía actualizada.
  - **Código 404:** Si la audioguía no se encuentra.
  - **Código 400:** Si hay un error de validación.
  - **Código 500:** Error al actualizar la audioguía.

### 4. Eliminar una Audioguía

- **Método:** `DELETE`
- **Ruta:** `/api/audioguia/{id}`
- **Descripción:** Elimina una audioguía por su ID.
- **Parámetros de Ruta:**
  - `id`: ID de la audioguía a eliminar.
- **Respuesta:**
  - **Código 200:** Devuelve la audioguía eliminada.
  - **Código 404:** Si la audioguía no se encuentra.
  - **Código 500:** Error al eliminar la audioguía.

### 5. Obtener Audioguías por ID de Checkpoint

- **Método:** `GET`
- **Ruta:** `/api/audioguia/checkpoint/{id_checkpoint}`
- **Descripción:** Recupera todas las audioguías asociadas a un checkpoint específico.
- **Parámetros de Ruta:**
  - `id_checkpoint`: ID del checkpoint.
- **Respuesta:**
  - **Código 200:** Devuelve un array de audioguías.
  - **Código 404:** Si no se encuentran audioguías para el checkpoint.
  - **Código 500:** Error del servidor.

## Conclusión

Esta documentación proporciona una visión general de las operaciones disponibles en el controlador de audioguías. Para más detalles sobre la implementación, consulta el código fuente correspondiente.
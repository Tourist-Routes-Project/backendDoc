---
title: Microservicio Comentarios
description: Gestiona la creación, edición, eliminación de comentarios asociados a usuarios, almacenando datos como descripción y fecha de creación.
---
# Documentación del Controlador de Comentarios

## Introducción

Este controlador permite gestionar los comentarios asociados a rutas. Proporciona funcionalidades para obtener, agregar, actualizar y eliminar comentarios.

## Endpoints

### 1. Obtener Comentarios por ID de Ruta

- **Método:** `GET`
- **Ruta:** `/api/v1/comment/route/{id}`
- **Descripción:** Recupera todos los comentarios asociados a una ruta específica.
- **Parámetros de Ruta:**
  - `id`: ID de la ruta para la que se desean obtener los comentarios.
- **Respuesta:**
  - **Código 200:** Devuelve una lista de comentarios.
  - **Código 404:** Si no se encuentran comentarios para la ruta.

### 2. Agregar un Comentario

- **Método:** `POST`
- **Ruta:** `/api/v1/comment`
- **Descripción:** Agrega un nuevo comentario a la base de datos.
- **Cuerpo de la Solicitud:**
  ```json
  {
    "texto": "string",
    "autor": "string",
    "id_ruta": "int"
  }
  ```
- **Respuesta:**
  - **Código 201:** Devuelve el comentario creado.
  - **Código 400:** Si hay un error de validación.
  - **Código 500:** Error al agregar el comentario.

### 3. Actualizar un Comentario

- **Método:** `PUT`
- **Ruta:** `/api/v1/comment/{id}`
- **Descripción:** Actualiza un comentario existente.
- **Parámetros de Ruta:**
  - `id`: ID del comentario a actualizar.
- **Cuerpo de la Solicitud:**
  ```json
  {
    "texto": "string",
    "autor": "string"
  }
  ```
- **Respuesta:**
  - **Código 200:** Devuelve el comentario actualizado.
  - **Código 404:** Si el comentario no se encuentra.
  - **Código 400:** Si hay un error de validación.
  - **Código 500:** Error al actualizar el comentario.

### 4. Eliminar un Comentario

- **Método:** `DELETE`
- **Ruta:** `/api/v1/comment/{id}`
- **Descripción:** Elimina un comentario por su ID.
- **Parámetros de Ruta:**
  - `id`: ID del comentario a eliminar.
- **Respuesta:**
  - **Código 200:** Devuelve el comentario eliminado.
  - **Código 404:** Si el comentario no se encuentra.
  - **Código 500:** Error al eliminar el comentario.

## Conclusión

Esta documentación proporciona una visión general de las operaciones disponibles en el controlador de comentarios. Para más detalles sobre la implementación, consulta el código fuente correspondiente.
---
title: Microservicio RutaCheckpoint
description: Gestiona rutas turísticas y los puntos de control asociados (checkpoints).
---

# Documentación del Microservicio RutaCheckpoint

## Introducción

Este microservicio proporciona funcionalidades para gestionar rutas y puntos de control (checkpoints). A continuación se describen los controladores y sus respectivas APIs.

## Controladores

### 1. CheckpointController

El `CheckpointController` maneja las operaciones relacionadas con los puntos de control y las rutas.

#### Endpoints

- **Agregar Ruta**
  - **Método:** `POST`
  - **Ruta:** `/api/v1/route`
  - **Descripción:** Agrega una nueva ruta con sus puntos de control asociados.
  - **Cuerpo de la Solicitud:**
    ```json
    {
      "nombreRuta": "string",
      "checkpoints": [
        {
          "id": "int",
          "nombre": "string",
          "coordenadas": "string"
        }
      ]
    }
    ```
  - **Respuesta:** `Response<Checkpoint>`

- **Eliminar Ruta**
  - **Método:** `DELETE`
  - **Ruta:** `/api/v1/route/{routeId}`
  - **Descripción:** Elimina una ruta específica por su ID.
  - **Parámetros de Ruta:**
    - `routeId`: ID de la ruta a eliminar.
  - **Respuesta:** `Response<String>`

- **Obtener Checkpoint por ID**
  - **Método:** `GET`
  - **Ruta:** `/api/v1/checkpoint/{checkpointId}`
  - **Descripción:** Obtiene un checkpoint específico por su ID.
  - **Parámetros de Ruta:**
    - `checkpointId`: ID del checkpoint a obtener.
  - **Respuesta:** `CheckpointDTO`

### 2. RouteController

El `RouteController` gestiona las operaciones relacionadas con las rutas.

#### Endpoints

- **Obtener Todas las Rutas**
  - **Método:** `GET`
  - **Ruta:** `/api/v1/routes`
  - **Descripción:** Devuelve una lista de todas las rutas.
  - **Respuesta:** `List<RouteDTO>`

- **Obtener Rutas por Ciudad**
  - **Método:** `GET`
  - **Ruta:** `/api/v1/routes/city/{nameCity}`
  - **Descripción:** Devuelve una lista de rutas filtradas por el nombre de la ciudad.
  - **Parámetros de Ruta:**
    - `nameCity`: Nombre de la ciudad para filtrar las rutas.
  - **Respuesta:** `List<RouteDTO>`

- **Obtener Ruta por ID**
  - **Método:** `GET`
  - **Ruta:** `/api/v1/routes/{id}`
  - **Descripción:** Obtiene una ruta específica por su ID.
  - **Parámetros de Ruta:**
    - `id`: ID de la ruta a obtener.
  - **Respuesta:** `RouteDTO`

## Autenticación y Seguridad

Este microservicio permite solicitudes desde cualquier origen gracias a la anotación `@CrossOrigin`. Asegúrate de implementar medidas de seguridad según sea necesario.

## Conclusión

Esta documentación proporciona una visión general de los controladores disponibles en el microservicio `RutaCheckpoint`. Para más detalles sobre la implementación, consulta el código fuente correspondiente.

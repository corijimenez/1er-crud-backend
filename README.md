# 🚀 Proyecto de Backend CRUD de Servicios

Este es un proyecto de backend que proporciona una API RESTful para administrar servicios. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una base de datos de servicios.

## ✨ Características

-   **Crear un nuevo servicio:** Permite agregar un nuevo servicio a la base de datos.
-   **Obtener la lista de servicios:** Permite obtener la lista completa de servicios.
-   **Obtener un servicio por su ID:** Permite obtener un servicio específico a través de su ID.
-   **Actualizar un servicio:** Permite actualizar la información de un servicio existente.
-   **Eliminar un servicio:** Permite eliminar un servicio de la base de datos.

## 🛠️ Tecnologías Utilizadas

-   **Node.js:** Entorno de ejecución de JavaScript del lado del servidor.
-   **Express:** Framework web para Node.js que simplifica la creación de aplicaciones web y APIs.
-   **MongoDB:** Base de datos NoSQL utilizada para almacenar la información de los servicios.
-   **Mongoose:** Librería de modelado de objetos de MongoDB para Node.js que facilita la interacción con la base de datos.
-   **CORS:** Middleware de Express que permite el intercambio de recursos entre diferentes dominios.
-   **Morgan:** Middleware de Express que registra las solicitudes HTTP en la consola.

## 📁 Estructura del Proyecto

El proyecto sigue una estructura organizada para separar las responsabilidades:

-   **`index.js`**: Punto de entrada de la aplicación.
-   **`src/`**: Directorio que contiene el código fuente de la aplicación.
    -   **`controllers/`**: Contiene los controladores que manejan la lógica de las solicitudes.
    -   **`models/`**: Contiene los modelos de datos de Mongoose.
    -   **`routes/`**: Contiene las rutas de la API.
    -   **`server/`**: Contiene la configuración del servidor Express.
        -   **`config.js`**: Configuración principal del servidor.
        -   **`dbConfig.js`**: Configuración de la conexión a la base de datos.
-   **`public/`**: Directorio que contiene archivos estáticos.

## 🌐 Endpoints de la API

| Método | Ruta | Descripción |
| --- | --- | --- |
| GET | `/api/servicios` | Obtiene la lista de todos los servicios. |
| POST | `/api/servicios` | Crea un nuevo servicio. |
| GET | `/api/servicios/:id` | Obtiene un servicio por su ID. |
| PUT | `/api/servicios/:id` | Actualiza un servicio por su ID. |
| DELETE | `/api/servicios/:id` | Elimina un servicio por su ID. |

## 🚀 Cómo Empezar

1.  Clona este repositorio:
    ```bash
    git clone https://github.com/CorinaJimenez/backend-crud.git
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

La API estará disponible en `http://localhost:3000`.

## 📜 Scripts

-   **`npm start`**: Inicia el servidor en modo de producción.
-   **`npm run dev`**: Inicia el servidor en modo de desarrollo con recarga automática.

## 📦 Modelo de Servicio

El modelo de servicio tiene la siguiente estructura:

-   `servicio` (String, requerido): Nombre del servicio.
-   `precio` (Number, requerido): Precio del servicio.
-   `imagen` (String, requerido): URL de la imagen del servicio.
-   `categoria` (String, requerido): Categoría del servicio ("Desarrollo Web", "Backend y API", "Consultoría", "Otros").
-   `descripcion` (String, requerido): Descripción breve del servicio.
-   `descripcion_amplia` (String, requerido): Descripción detallada del servicio.

## 👩‍💻 Autor

**Corina Jimenez**

-   [GitHub](https://github.com/CorinaJimenez)
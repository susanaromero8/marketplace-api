# 📦 API Externa - Marketplace Simulado

Este repositorio contiene una API que simula un marketplace como Mercado Libre, Amazon o eBay. Sirve como fuente de datos para una API interna que consume sus productos.

---

## 📁 Estructura del Proyecto

```
marketplace-api
├── src
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── marketplaceProduct.controller.js
│   ├── models
│   │   └── MarketplaceProduct.js
│   ├── routes
│   │   └── marketplaceProduct.route.js
│   └── seeder.js
├── .env
├── index.js
└── package.json
```

---

## 🚀 Cómo ejecutar la API externa

### 1. Clona el repositorio

```bash
git clone https://github.com/susanaromero8/marketplace-api.git
cd marketplace-api
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Configura las variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
DB_USER=usuario
DB_PASSWORD=contraseña
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=marketplace_db
```

### 4. Crea las tablas en la base de datos

Puedes habilitar la creación automática de tablas descomentando la línea en `index.js`:

```js
// await sequelize.sync();
```

Luego ejecuta:

```bash
node index.js
```

### 5. Ejecuta el seeder para poblar productos

```bash
node src/seeder.js
```

### 6. Ejecuta el servidor

```bash
npm run dev
```

El servidor estará corriendo en `http://localhost:4000`.

---

---

---

## 🌐 Endpoints disponibles

### 📦 Productos del marketplace

- `GET /marketplace/products`: Obtiene todos los productos.
- `GET /marketplace/products/:id`: Obtiene un producto por ID.
- `POST /marketplace/update`: Inserta o actualiza un producto.
- `DELETE /marketplace/delete/:id`: Elimina un producto por ID.

---

## 🧰 Tecnologías utilizadas

- **Node.js** + **Express**
- **Sequelize** + **PostgreSQL**
- **dotenv** para configuración

---

## 📝 Notas adicionales

- Esta API no requiere autenticación.
- Está pensada para ser consumida por una API interna.

---

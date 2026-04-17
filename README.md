# 🛒 Ecommerce API (TypeScript + Prisma + JWT)

## 🚀 Descripción

API REST para gestión de productos, usuarios y pedidos con autenticación JWT.

## 🧠 Tecnologías

* Node.js
* TypeScript
* Express
* Prisma ORM
* PostgreSQL
* JWT (jsonwebtoken)
* bcrypt

## 🔐 Funcionalidades

* Registro de usuarios
* Login con JWT
* Protección de rutas
* CRUD de productos
* Middleware de autenticación

## ⚙️ Instalación

```bash
git clone <repo>
cd ecommerce-api-ts
npm install
```

## 🧪 Configuración

Crear archivo `.env`:

```env
DATABASE_URL=postgresql://...
JWT_SECRET=your_secret
```

## ▶️ Ejecutar

```bash
npm run dev
```

## 🔐 Endpoints

### Auth

* POST /auth/register
* POST /auth/login

### Products

* GET /products
* POST /products (protected)

## 🧠 Autor

Luis Rivas

# 🛒 **QuantumCart Web**

QuantumCart Web is the frontend for the **QuantumCart** platform — a modern webshop built with **Angular 21**, **TypeScript**, and **SCSS**.
It integrates with the companion backend (**`quantumcart-api`**) to deliver a full e-commerce experience including:

* User authentication (JWT-based)
* Product browsing
* Add-to-cart functionality
* Checkout flow (future)
* Modern Material 3-style UI
* Backend running on **Supabase**, **PostgreSQL**, **S3 storage**, and **Go**

---

## 🚀 Development Server

Start the local Angular development server:

```bash
ng serve
```

The app will be available at:
👉 [http://localhost:4200/](http://localhost:4200/)

The server automatically reloads when you change any source files.

---

## 🏗️ Code Scaffolding

Generate new Angular components, services, pipes, and more:

```bash
ng generate component component-name
```

List all schematics:

```bash
ng generate --help
```

---

## 🧱 Building

Build the project:

```bash
ng build
```

Build output goes to the `dist/` directory.

The production build includes:

* Optimized bundles
* Minified code
* Tree-shaking
* Improved performance

---

## 🧪 Running Unit Tests

This project uses **Vitest** for fast unit testing:

```bash
ng test
```

---

## 🔍 End-to-End Testing

To run e2e tests:

```bash
ng e2e
```

Angular does not ship with an e2e framework by default — choose your preferred solution (Playwright, Cypress, etc.).

---

# 🧩 **Project Stack**

### **Frontend**

* Angular 21
* TypeScript
* SCSS
* Material-styled components (M3-like)
* Standalone component architecture

### **Backend (quantumcart-api)**

* Go (REST API)
* PostgreSQL (via Supabase)
* Storage using Supabase S3
* JWT Authentication
* User endpoints (login, register, get, patch)

---

# 🔗 Related Repository

Backend API:
👉 [https://github.com/FIS-Labs/quantumcart-api](https://github.com/FIS-Labs/quantumcart-api) *(replace if needed)*

---

## 📚 Additional Resources

Angular CLI documentation:
[https://angular.dev/tools/cli](https://angular.dev/tools/cli)

Angular documentation:
[https://angular.dev](https://angular.dev)

---

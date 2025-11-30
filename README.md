# ⚛️ QuantumCart Web

**QuantumCart** is a next–generation **tech-themed e-commerce** web application built with **Angular 21**, featuring a fully modernized UI with *glassmorphism*, *neon energy accents*, and *smooth micro-interactions*.
Designed with clean architecture, scalability, and premium UX in mind.

---

## 🚀 Features

### 🌀 **Splash Screen**

* Animated quantum waveform logo
* Subtle pulsing glow/energy effect
* Auto-dismiss transition

---

### 🔐 **Authentication**

* Login & Register screens
* Optimized Material 3 input fields
* Quantum-styled glassmorphic auth cards
* Neon gradient primary action buttons
* Validation ready for backend wiring

---

### 🛒 **Product Catalog (Tech Store)**

* Fully dynamic product card grid
* Responsive layout, hover zoom effects
* Category filtering
* Sorting (price, rating, name)
* Reusable `<product-card>` component
* True plug-and-play usage across the app
* Static mock data designed for **laptop & PC hardware** shop

---

### 🔍 **Product Detail View**

* Modern single-product page
* Large hero image
* Neon-highlight pricing
* Category, rating, description
* QuantumCart-styled **Add to Cart** button
* Mobile-friendly layout

---

### ✨ **Quantum UI/UX**

* Glassmorphism layers
* Neon cyan/violet glow accents
* Animated cards and buttons
* Smooth transitions everywhere
* Pixel-perfect responsive behavior

---

## 📱 Responsive Design

* Fully mobile-first
* Adaptive grid for product cards
* Stack-to-column layout for product detail
* Soft container padding & spacing scale

---

## 📂 Project Structure (Clean Architecture)

```
src/app/
├── core/
│   └── components/
│       └── splash-screen/
│
├── features/
│   ├── auth/
│   │   ├── login-screen/
│   │   └── register-screen/
│   │
│   └── products/
│       ├── data/                 # Static mock data (computers & hardware)
│       ├── domain/               # Models/interfaces
│       ├── ui/
│       │   ├── product-list/     # Catalog page
│       │   ├── product-detail/   # Detail page
│       │   └── components/
│       │       └── product-card/ # Reusable card component
│
├── app.config.ts
├── app.routes.ts
└── app.ts
```

This structure provides isolation between **data**, **domain**, and **UI**, preparing you for backend wiring in later tickets.

---

## 🧩 Tech Stack

* **Angular 21**
* **Angular Material 3** (custom themed)
* **SCSS** with design tokens, neon palette
* **Vitest** for testing
* **Modern clean architecture layout**
* **Quantum UI system** (neon + glassmorphism)

---

## 🛠 Development

Start the dev server:

```bash
ng serve
```

Navigate to:

```
http://localhost:4200/
```

Live reload enabled automatically.

---

## 🧱 Code Scaffolding

Generate new components:

```bash
ng generate component component-name
```

List all schematics:

```bash
ng generate --help
```

---

## 🏗 Build

Generate production build:

```bash
ng build
```

Output will be in the `dist/` folder with optimization applied automatically.

---

## 🧪 Unit Tests

Run all unit tests via:

```bash
ng test
```

---

## 🌐 End-to-End Testing

You can run E2E tests with:

```bash
ng e2e
```

Angular does not include a built-in E2E solution — integrate Cypress, Playwright, or WebdriverIO based on your preference.

---

## 📘 Resources

* Angular CLI Docs:
  [https://angular.dev/tools/cli](https://angular.dev/tools/cli)

* Angular Material Theming:
  [https://material.angular.dev/guide/theming](https://material.angular.dev/guide/theming)

---
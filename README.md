# ⚛️ QuantumCart Web

**QuantumCart** is a next-generation e-commerce web application built with **Angular 21**, featuring a **futuristic quantum-inspired UI**, glassmorphism, neon accents, and smooth micro-interactions.
Designed with performance, clarity, and modern UX in mind.

---

## 🚀 Features

### 🌀 **Splash Screen**

* Animated quantum-style splash screen
* Pulsing neon logo
* Smooth fade-out transition

### 🔐 **Authentication**

* Login & Register pages
* Clean Material 3 fields styled to match the quantum theme
* Error handling & form validation ready

### ✨ **UI/UX Design**

* Glassmorphism cards
* Neon cyan/violet glow accents
* Gradient quantum buttons
* Minimalistic, consistent, modern layout
* Fully responsive for all screen sizes

### 📱 **Responsive**

* Mobile-first layouts
* Fluid spacing and adaptive sizing
* Works across all modern browsers

---

## 📁 Project Structure

```
src/app/
├── core/
│   └── components/
│       └── splash-screen/     # App splash screen component
│
├── features/
│   └── auth/                  # Authentication module
│       ├── login/             # Login page (Material + custom styling)
│       └── register/          # Registration page
│
├── app.config.ts              # Global Angular configuration
├── app.routes.ts              # Application routing
└── app.ts                     # Root application component
```

---

## 🧩 Tech Stack

* **Angular 21**
* **Angular Material 3** (themed to match QuantumCart’s design)
* **SCSS** with custom design tokens
* **Vitest** for unit testing
* **Glassmorphism** + **Neon UI** design system

---

## 🛠️ Development

Start a local dev server:

```bash
ng serve
```

Then open:

```
http://localhost:4200/
```

The app automatically reloads on code changes.

---

## 🧱 Code Scaffolding

Generate a new component:

```bash
ng generate component component-name
```

View all available schematics:

```bash
ng generate --help
```

---

## 🏗️ Build

To create a production build:

```bash
ng build
```

Build artifacts will be stored in `dist/`.
The production configuration includes optimizations for speed, bundle size, and performance.

---

## 🧪 Unit Tests

Run unit tests using **Vitest**:

```bash
ng test
```

---

## 🌐 End-to-End Testing

E2E tests can be executed via:

```bash
ng e2e
```

Angular no longer ships with a default E2E framework — you may add Cypress, Playwright, or another tool of your choice.

---

## 📘 Additional Resources

* Angular CLI Documentation:
  [https://angular.dev/tools/cli](https://angular.dev/tools/cli)
* Angular Material Theming Guide:
  [https://material.angular.dev/guide/theming](https://material.angular.dev/guide/theming)
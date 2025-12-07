# ⚛️ QuantumCart Web

**QuantumCart** is a next–generation **tech-themed e-commerce** web application built with **Angular 21**, featuring a futuristic UI with _glassmorphism_, _neon energy gradients_, soft shadows, and polished interactions.
Designed with clean architecture, modular features, and a premium shopping experience.

---

## 🚀 Features

### 🌀 **Splash Screen**

- Animated quantum waveform logo
- Neon-glowing energy pulse
- Auto-dismiss + smooth fade transition

---

### 🔐 **Authentication**

- Login & Register screens
- Elegant input fields with neon focus
- Glassmorphic auth cards
- Gradient primary buttons
- Ready for backend (JWT, user profiles)

---

### 🛒 **Product Catalog**

- Dynamic multi-card grid
- Category filtering
- Sorting (price, rating, alphabetical)
- Responsive tile layout
- Futuristic hover animations
- Reusable `<product-card>` component
- Static PC hardware dataset

---

### 🔍 **Product Detail Page**

- Large product hero section
- Discount + rating markers
- Neon price highlight
- Category chips
- Add-to-cart button

---

### 🛍️ **Cart System**

- Add / Update / Remove items
- Quantity picker
- Beautiful glass item cards
- Sticky checkout summary bar
- Instant reactive updates

---

### 📦 **Checkout Flow**

- Address form fields
- Payment selection (Credit, PayPal, Crypto)
- Delivery options (Standard / Express)
- Order Summary component
- Fully responsive neon design

---

## 📜 **NEW — Past Orders (Order History)**

- Dedicated **Past Orders page**
- Displays:
  - Order number
  - Order date
  - Order total
  - Number of items
  - Status badge (Delivered / Shipped / Processing)

- Uses **static mock data** for UI demonstration
- Clean list layout matching the cart + checkout glass style
- Works with the language switcher

---

## 🌐 **NEW — Multi-Language Support (EN / DE)**

QuantumCart now includes a lightweight i18n system:

### ⭐ Features:

- Language selector added to the navbar
- Current languages:
  - 🇬🇧 English
  - 🇩🇪 German

- UI text automatically updates everywhere:
  - Navbar
  - Product list
  - Past orders
  - Buttons + labels
  - Status text ("Delivered", "Shipped", etc.)

- Translations stored inside a centralized `TranslationService`
- Backend text (e.g., product descriptions) supports bilingual fields
  Example: `description` + `descriptionDe`

Example usage:

```ts
t('products'); // returns EN or DE string
translateStatus(order.status);
```

---

## 📱 Responsive Design

- Fully mobile-first
- Smooth responsive scaling
- Column-collapse on mobile
- Neon glow scaling for smaller screens

---

## 📂 Project Structure (Clean Architecture)

```
src/app/
├── core/
│   ├── components/
│   │   ├── splash-screen/
│   │   └── app-layout/
│   └── translation/
│       └── translation.service.ts
│
├── features/
│   ├── auth/
│   │   ├── login/
│   │   └── register/
│   │
│   ├── products/
│   │   ├── data/
│   │   ├── domain/
│   │   └── ui/
│   │       ├── product-card/
│   │       ├── product-list/
│   │       └── product-detail/
│   │
│   ├── cart/
│   │   ├── domain/
│   │   └── ui/
│   │       ├── cart-page/
│   │       └── checkout-page/
│   │
│   └── orders/
│       ├── domain/
│       └── ui/
│           └── past-orders/
│
├── app.routes.ts
└── app.config.ts
```

Now includes `orders/` feature module + global translation service.

---

## 🔗 API JSON Examples

### 🧑‍💻 User Response Example

```json
{
  "id": 42,
  "firstName": "Amar",
  "lastName": "Mehic",
  "email": "amar@example.com",
  "createdAt": "2025-01-10T12:44:00Z"
}
```

---

### 🛒 Product List Response Example

```json
[
  {
    "id": 1,
    "name": "QuantumBook X15 Pro",
    "category": "Laptops",
    "categoryDe": "Laptops",
    "price": 1499.99,
    "oldPrice": 1799.99,
    "rating": 4.8,
    "description": "The QuantumBook X15 Pro is built for creators, engineers and gamers who demand extreme performance. Featuring a 15.6” QLED display with 165Hz refresh rate, a quantum-accelerated processing core, and ultra-silent cooling. Perfect for 3D design, AI development, and high-end gaming, all wrapped in a sleek aluminum chassis.",
    "descriptionDe": "Das QuantumBook X15 Pro wurde für Kreative, Ingenieure und Gamer entwickelt, die extreme Leistung benötigen. Ausgestattet mit einem 15,6\"-QLED-Display mit 165Hz, einem quantenbeschleunigten Rechenkern und einem ultra-leisen Kühlsystem. Perfekt für 3D-Design, KI-Entwicklung und High-End-Gaming – verpackt in einem eleganten Aluminiumgehäuse.",
    "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80"
  }
]
```

---

### 📦 Order History Example

```json
[
  {
    "id": 101,
    "userId": 42,
    "total": 1499.97,
    "paymentMethod": "credit",
    "deliveryMethod": "express",
    "createdAt": "2025-01-28T17:20:00Z",
    "items": [
      {
        "productId": 7,
        "name": "AeroCool Quantum Case",
        "price": 129.99,
        "quantity": 1,
        "imageUrl": "..."
      }
    ],
    "shippingAddress": {
      "name": "Amar Mehic",
      "street": "Quantum Street 7",
      "city": "Vienna",
      "postalCode": "1010",
      "country": "Austria"
    }
  }
]
```

---

## 🛠 Development

```bash
ng serve
```

Run at:

```
http://localhost:4200/
```

---

## 🏗 Build

```bash
ng build
```

---

## 🧪 Testing

```bash
ng test
```

---

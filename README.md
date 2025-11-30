# ⚛️ QuantumCart Web

**QuantumCart** is a next–generation **tech-themed e-commerce** web application built with **Angular 21**, featuring a futuristic UI with *glassmorphism*, *neon energy gradients*, soft shadows, and polished interactions.
Designed with clean architecture, modular features, and a premium shopping experience.

---

## 🚀 Features

### 🌀 **Splash Screen**

* Animated quantum waveform logo
* Neon-glowing energy pulse
* Auto-dismiss + smooth fade transition

---

### 🔐 **Authentication**

* Login & Register screens
* Elegant input fields with neon focus
* Glassmorphic auth cards
* Gradient primary buttons
* Ready to connect to real backend (JWT-friendly)

---

### 🛒 **Product Catalog**

* Dynamic multi-card product grid
* Category filtering
* Sorting (price, rating, alphabetical)
* Responsive tile layout
* Neon hover effects
* Reusable `<product-card>` component
* Static dataset modeled after a **PC hardware store**

---

### 🔍 **Product Detail Page**

* Large product hero image
* Discount badge + rating badge
* Highlighted neon prices
* Product category chip
* Add-to-cart button + quick navigation

---

### 🛍️ **Cart System**

* Full cart management (add, update, remove)
* Neon-styled item cards
* Quantity selection
* Sticky checkout bar
* Real product information reflected immediately

---

### 📦 **Checkout Flow**

* Glass-styled address section
* Payment method (Credit, PayPal, Crypto)
* Delivery method (Standard / Express)
* Order summary block
* Unified UI with auth + catalog

---

## 📱 Responsive Design

* Mobile-first
* Fully responsive product list
* Beautifully stacked checkout layout
* Adaptive image scaling
* Perfectly centered content

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
│
├── app.routes.ts
└── app.config.ts
```

This separation keeps **data, domain, and UI** clean and scalable.

---

## 🔗 API JSON Examples

These examples show what the backend should return or accept.

---

### 🧑‍💻 **User Response Example**

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

### 🛒 **Product List Response Example**

```json
[
  {
    "id": 7,
    "name": "AeroCool Quantum Case",
    "category": "PC Cases",
    "price": 129.99,
    "rating": 4.7,
    "description": "A premium tempered-glass mid-tower case with optimized airflow, RGB panels, and modular cooling support.",
    "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80"
  },
  {
    "id": 12,
    "name": "RTX 4080 SUPER",
    "category": "Graphics Cards",
    "price": 1199.00,
    "rating": 4.9,
    "description": "Ultra-fast Ada Lovelace architecture, DLSS 3 support, and next-gen ray tracing.",
    "imageUrl": "https://images.unsplash.com/photo-1610465299996-30f2b3c79805?w=1200&q=80"
  }
]
```

---

### 📦 **Order History Example**

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
        "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80"
      },
      {
        "productId": 12,
        "name": "RTX 4080 SUPER",
        "price": 1199.00,
        "quantity": 1,
        "imageUrl": "https://images.unsplash.com/photo-1610465299996-30f2b3c79805?w=1200&q=80"
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

Start server:

```bash
ng serve
```

Visit:

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
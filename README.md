# ⚛️ QuantumCart Web

**QuantumCart** is a next–generation **tech-themed e-commerce** web application built with **Angular 21**, featuring a futuristic UI with _glassmorphism_, _neon energy gradients_, soft shadows, and polished interactions.
Designed with clean architecture, modular features, and a premium shopping experience.

---

## �️ Installation

```bash
# Clone the repository
git clone https://github.com/FIS-Labs/quantumcart-web.git

# Install dependencies
npm install

# Start the development server
npm start
```

---

## �🚀 Features

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
- Sorting (price, name, rating)
- **Stock availability badges** (In Stock / Out of Stock indicators)
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
- **Itemized cost breakdown**:
  - Subtotal
  - Tax (19% VAT)
  - Delivery cost (varies by method)
  - Grand total
- Order Summary component
- Fully responsive neon design

---

## 👤 **User Profile & Authentication**

### Authentication

- **Login & Registration**: Secure user authentication
- **Forgot Password Flow**: Password reset request page (mock mode)
- **JWT Ready**: Structure supports token-based auth

### Profile Management

- **View Profile**: Display user information (name, email, phone, address)
- **Edit Profile**: Full profile editing with form validation
  - Update name and email
  - Add/edit phone number
  - Add/edit delivery address
- **Account Actions**:
  - Logout functionality
  - Delete Account (with confirmation dialog)
- **Protected Routes**: Redirects to login if unauthenticated
- **Glassmorphic UI**: Premium design consistent with app theme

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

## 🌐 **Multi-Language Support (EN / DE)**

QuantumCart includes a lightweight i18n system with full bilingual support:

### Features:

- **Language Selector**: Available on navbar and all auth pages
- **Supported Languages**:
  - 🇬🇧 English
  - 🇩🇪 German (Deutsch)
- **Complete Coverage**: All UI text translates automatically:
  - Navigation & buttons
  - Product catalog
  - Shopping cart & checkout
  - User profile
  - Order history
  - Authentication pages
  - Status messages
- **Centralized Service**: `TranslationService` manages all translations
- **Backend Support**: Bilingual product descriptions (`description` + `descriptionDe`)

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
│   │   └── app-layout/
│   └── services/
│       └── translation/
│           └── translation.service.ts
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
│   ├── orders/
│   │   ├── domain/
│   │   └── ui/
│   │       └── past-orders/
│   │
│   ├── profile/
│   │   └── ui/
│   │       └── profile-page/
│   │
│   └── splash/
│       └── ui/
│           └── splash.component
│
├── app.routes.ts
├── app.config.ts
└── app.component.ts
```

Now includes `orders/` and `profile/` feature modules + global translation service.

---

## 🔗 API JSON Examples

### 🧑‍💻 User Response Example

```json
{
  "id": 42,
  "name": "Amar Mehic",
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
    "inStock": true,
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
    "total": 1499.97,
    "paymentMethod": "credit",
    "deliveryMethod": "express",
    "createdAt": "2025-01-28T17:20:00Z",
    "status": "Delivered",
    "statusDe": "Geliefert",
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

## 🏛️ Architecture

### Clean Architecture Pattern

QuantumCart follows **Clean Architecture** principles with clear separation of concerns:

```
Feature Module Structure:
├── domain/           # Business logic layer
│   ├── *.model.ts   # Domain entities & requests
│   ├── *.repository.ts  # Repository interfaces (abstractions)
│   └── *.facade.ts  # Business logic orchestration
├── data/            # Data access layer
│   ├── *.service.ts # Data services (mock or HTTP)
│   ├── *.repository.impl.ts  # Repository implementations
│   └── mock-*.ts    # Mock data (easily replaceable)
└── ui/              # Presentation layer
    └── components/  # Angular components
```

### Real Example: Auth Feature

```
features/auth/
├── domain/
│   ├── auth.model.ts           # AuthUser, LoginRequest, UpdateProfileRequest
│   ├── auth.repository.ts      # Abstract repository interface
│   └── auth.facade.ts          # AuthFacade (called by components)
├── data/
│   ├── auth.service.ts         # AuthService (mock implementation)
│   ├── auth.repository.impl.ts # AuthRepositoryImpl
│   └── mock-users.json.ts      # Mock user data
└── ui/
    ├── login/                   # Login component
    ├── register/                # Register component
    ├── forgot-password/         # Forgot password component
    └── (components interact only with AuthFacade)
```

### Dependency Flow

```
Component → Facade → Repository (interface) → Repository Implementation → Service → Data
```

**Example Flow (User Login):**

1. `LoginComponent` calls `authFacade.login(email, password)`
2. `AuthFacade` delegates to `authRepository.login()`
3. `AuthRepositoryImpl` calls `authService.loginUser()`
4. `AuthService` validates against `MOCK_USERS`
5. Returns `Observable<AuthUser>` through the chain
6. Component subscribes and updates UI

**Benefits:**

- ✅ UI components never touch data services directly
- ✅ Easy to swap mock data for HTTP calls
- ✅ Testable at every layer
- ✅ Type-safe throughout

### State Management

- **Reactive state** with **RxJS BehaviorSubjects**
- **Facades expose state as Observables**
- **Components subscribe to state changes**
- **Immutable state updates**

**Example (Cart Feature):**

```typescript
// CartFacade exposes cart$ Observable
cart$: Observable<Cart> = this.cartSubject.asObservable();

// Component subscribes
this.cartFacade.cart$.subscribe((cart) => {
  this.items = cart.items;
  this.total = cart.total;
});
```

---

## 🔌 API Ready

### Current State

✅ **100% API Ready** - The frontend is structured to connect to a REST API:

- All services return `Observable<T>` for async operations
- Repository pattern abstracts data access
- Mock data isolated in `data/` layer
- Models match backend API contracts

### To Connect to Real API

1. **Install HttpClient** (already available via `@angular/common/http`)
2. **Update Services** in `features/*/data/*.service.ts`:

   ```typescript
   // Replace mock data
   import { HttpClient } from '@angular/common/http';

   getAllPaged(page: number, pageSize: number): Observable<PaginatedProducts> {
     return this.http.get<PaginatedProducts>(`/api/products?page=${page}&pageSize=${pageSize}`);
   }
   ```

3. **Configure API Base URL** in `environment.ts`
4. **Add interceptors** for auth tokens

**No changes needed** to:

- Components
- Facades
- Repository interfaces
- Models

---

## 📡 Backend API

### API Specification

See [openapi.yaml](./openapi.yaml) for complete API specification.

### Key Endpoints

#### Authentication

```
POST   /auth/register          # Register new user
POST   /auth/login             # Login (returns JWT token)
GET    /auth/me                # Get current user
POST   /auth/logout            # Logout
POST   /auth/forgot-password   # Request password reset
POST   /auth/reset-password    # Reset password with token
PUT    /auth/user              # Update user profile
DELETE /auth/user              # Delete account
```

#### Products

```
GET    /products               # List products (paginated, filterable)
GET    /products/{id}          # Get product details
GET    /products/{id}/reviews  # Get product reviews
POST   /products/{id}/reviews  # Add product review
```

#### Orders

```
GET    /orders                 # List user orders
POST   /orders                 # Create new order (auth optional for guest checkout)
```

#### Stores

```
GET    /stores                 # List all stores
GET    /stores/{id}            # Get store details
```

### Authentication

- Uses **JWT Bearer tokens**
- Include in requests: `Authorization: Bearer <token>`
- Token returned from `/auth/login`

### Request/Response Examples

See **🔗 API JSON Examples** section above for detailed examples.

---

## 🧪 Testing

```bash
ng test
```

---

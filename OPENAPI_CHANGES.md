# OpenAPI v2.0 Changes

## What's New

This version includes all Priority 1 missing features to achieve Grade 6 compliance.

## New Endpoints

### Authentication

- **POST /auth/forgot-password** - Request password reset email
- **POST /auth/reset-password** - Reset password with token
- **PUT /auth/user** - Update user profile

### Orders

- **Guest Checkout** - POST /orders now supports both authenticated and guest users

## Enhanced Schemas

### AuthUser (User Profile)

**Added fields:**

```yaml
phone: string (nullable)
deliveryAddress:
  street: string
  city: string
  postalCode: string
  country: string
```

### Product

**Added field:**

```yaml
availability: enum [in_stock, low_stock, out_of_stock]
```

### Order

**Changed from `total` only to:**

```yaml
subtotal: number # Price before tax and delivery
tax: number # Tax amount
deliveryCost: number # Delivery cost
total: number # Final total
guestEmail: string # Present for guest orders
```

### CreateOrderRequest

**Added field:**

```yaml
guestEmail: string # Required for guest checkout
```

## Implementation Guide

### Frontend Changes Needed

1. **Profile Page**
   - Add phone input field
   - Add delivery address section
   - Implement "Edit Profile" functionality
   - Call PUT /auth/user on save

2. **Forgot Password**
   - Create forgot password page
   - Create reset password page
   - Call POST /auth/forgot-password
   - Call POST /auth/reset-password

3. **Guest Checkout**
   - Add email field to checkout form for non-logged-in users
   - Make auth optional when placing order
   - Pass guestEmail in CreateOrderRequest

4. **Cart/Checkout**
   - Display subtotal, tax, delivery cost separately
   - Update Order model to include these fields
   - Calculate/display breakdown

5. **Product Display**
   - Show availability badge (In Stock, Low Stock, Out of Stock)
   - Update Product model with availability field

### Backend Implementation

1. **Profile Management**
   - Implement PUT /auth/user endpoint
   - Store phone and delivery address
   - Validate address fields

2. **Password Reset**
   - Generate reset tokens
   - Send reset emails
   - Validate and expire tokens

3. **Guest Orders**
   - Allow unauthenticated POST /orders
   - Store guestEmail with order
   - Link to user account if they register later

4. **Order Calculations**
   - Calculate tax based on delivery address
   - Calculate delivery cost based on method
   - Return breakdown in response

5. **Product Availability**
   - Track stock levels
   - Return availability status
   - Update with orders

## Migration Notes

**Breaking Changes:**

- Order schema changed (added subtotal, tax, deliveryCost fields)
- AuthUser schema changed (added phone, deliveryAddress)
- Product schema changed (added availability)

**Backward Compatibility:**

- All new fields are optional/nullable where appropriate
- Existing endpoints remain unchanged

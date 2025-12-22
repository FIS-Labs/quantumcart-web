export interface AuthUser {
  id: number;
  name: string;
  email: string;
  phone?: string;
  additionalNotes?: string;
  street?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  createdAt: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UpdateProfileRequest {
  name: string;
  email: string;
  phone?: string;
  additionalNotes?: string;
  street?: string;
  city?: string;
  postalCode?: string;
  country?: string;
}

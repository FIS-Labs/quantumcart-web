export interface Store {
    id: number;
    name: string;
    address: string;
    city: string;
    postal: string;
    country: string;
    phone: string;
    email: string;
    openingHours: string;
    openingHoursDe?: string; // [NEW] German translation for opening hours
    imageUrl: string;
}

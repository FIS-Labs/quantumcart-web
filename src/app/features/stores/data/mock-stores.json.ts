import { Store } from '../domain/store.model';

export const MOCK_STORES: Store[] = [
    {
        id: 1,
        name: 'QuantumCart Central',
        address: 'Alexanderplatz 1',
        city: 'Berlin',
        postal: '10178',
        country: 'Germany',
        phone: '+49 30 12345678',
        email: 'berlin@quantumcart.com',
        openingHours: 'Mon-Sat: 09:00 - 20:00',
        openingHoursDe: 'Mo-Sa: 09:00 - 20:00',
        imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    },
    {
        id: 2,
        name: 'QuantumCart Innovation Hub',
        address: 'Marienplatz 1',
        city: 'Munich',
        postal: '80331',
        country: 'Germany',
        phone: '+49 89 87654321',
        email: 'munich@quantumcart.com',
        openingHours: 'Mon-Fri: 10:00 - 19:00',
        openingHoursDe: 'Mo-Fr: 10:00 - 19:00',
        imageUrl: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80',
    },
    {
        id: 3,
        name: 'QuantumCart West',
        address: 'Schildergasse 50',
        city: 'Cologne',
        postal: '50667',
        country: 'Germany',
        phone: '+49 221 11223344',
        email: 'cologne@quantumcart.com',
        openingHours: 'Mon-Sat: 09:30 - 20:00',
        openingHoursDe: 'Mo-Sa: 09:30 - 20:00',
        imageUrl: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&q=80',
    }
];

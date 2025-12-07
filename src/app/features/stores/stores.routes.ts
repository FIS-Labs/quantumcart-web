import { Routes } from '@angular/router';
import { StoresPageComponent } from './ui/stores-page/stores-page.component';

export const STORES_ROUTES: Routes = [
    {
        path: '',
        children: [
            { path: '', component: StoresPageComponent }
        ]
    }
];

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { CartService } from './app/core/services/cart.service';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    CartService, 
  ]
});


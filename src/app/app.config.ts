import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { RuletaComponent } from './components/ruleta/ruleta.component';
import { GajoComponent } from './components/gajo/gajo.component';
import { PremioComponent } from './components/premio/premio.component';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    RuletaComponent,
    GajoComponent,
    PremioComponent
  ]
};
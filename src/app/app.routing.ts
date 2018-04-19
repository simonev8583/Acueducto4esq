import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { weComponent } from './component/we/we.component';
import { AppComponent } from './app.component';
import { PayComponent } from './component/pay/pay.component';
/*import { ContactComponent } from './component/contact/component.contact';*/
import { HomeComponent } from './component/home/home.component';

//constante
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pagos', component: PayComponent },
  { path: 'nosotros', component: weComponent },
  { path: 'home', component: HomeComponent }

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


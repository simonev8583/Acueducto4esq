import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PayComponent } from './component/pay/pay.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 


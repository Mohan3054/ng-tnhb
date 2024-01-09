import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ViewSchemesComponent } from './components/view-schemes/view-schemes.component';
import { SchemeComponent } from './components/scheme/scheme.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewSchemesComponent,
    SchemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

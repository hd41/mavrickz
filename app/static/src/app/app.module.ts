import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import 'hammerjs';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
 import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HeaderComponent } from './first/header/header.component';
import { FooterComponent } from './first/footer/footer.component';
import { ContentComponent } from './first/content/content.component';
import { FirstComponent } from './first/first.component';
import { APP_ROUTES_PROVIDER } from './app.routes';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    FirstComponent,
    AuthComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTES_PROVIDER,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

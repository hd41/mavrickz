import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import 'hammerjs';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './first/header/header.component';
import { FooterComponent } from './first/footer/footer.component';
import { ContentComponent } from './first/content/content.component';
import { FirstComponent } from './first/first.component';
import { APP_ROUTES_PROVIDER } from './app.routes';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

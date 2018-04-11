import {Routes,RouterModule} from '@angular/router';
import { HeaderComponent } from './first/header/header.component';
import { FooterComponent } from './first/footer/footer.component';
import { ContentComponent } from './first/content/content.component';
import { FirstComponent } from './first/first.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: FirstComponent,
    },
    {
      path: 'auth',
      component: AuthComponent,
      children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'register', component: RegisterComponent },
        { path: 'login', component: LoginComponent },
      ],
    }
]

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(routes);

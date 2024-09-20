import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    { path:"", component: HomeComponent },
    { path:"app-login", component: LoginComponent },
    { path:"app-register", component: RegisterComponent },

    { path:"**", redirectTo: "/" },
];

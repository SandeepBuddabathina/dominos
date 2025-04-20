import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './home/header/header.component';
import { ForgotComponent } from './credintials/forgot/forgot.component';
import { LoginComponent } from './credintials/login/login.component';
import { RegisterComponent } from './credintials/register/register.component';
import { MenuComponent } from './home/menu/menu.component';
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'header',component:HeaderComponent},
  {path: 'menu',component:MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

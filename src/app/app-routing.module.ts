import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './credintials/login/login.component';
import { RegisterComponent } from './credintials/register/register.component';
import { ForgotComponent } from './credintials/forgot/forgot.component';
import { HeaderComponent } from './home/header/header.component';
import { MenuComponent } from './home/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { DominosUiComponent } from './dominos-ui/dominos-ui.component';
import { DeliveryLocationComponent } from './delivery-location/delivery-location.component';
import { TopBestsellersComponent } from './top-bestsellers/top-bestsellers.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'ui', component: DominosUiComponent },
  { path: 'select-location', component: DeliveryLocationComponent },
  { path: 'top-bestsellers', component: TopBestsellersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

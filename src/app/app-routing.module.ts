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
import { MyprofileComponent } from './credintials/myprofile/myprofile.component';
import { ContactComponent } from './credintials/contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CartComponent } from './cart/cart.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { GiftComponent } from './gift/gift.component';
import { StoresComponent } from './stores/stores.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'ui', component: DominosUiComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'select-location', component: DeliveryLocationComponent },
  { path: 'top-bestsellers', component: TopBestsellersComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'stores', component: StoresComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'enquiry', component: EnquiryComponent },
  {path: 'payment', component: PaymentComponent},
  { path: 'gift', component: GiftComponent },
  {path: 'orderplaced', component: OrderplacedComponent},
  {path: 'menu-items', component: MenuItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

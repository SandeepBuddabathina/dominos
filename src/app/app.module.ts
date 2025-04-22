import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { LoginComponent } from './credintials/login/login.component';
import { HeaderComponent } from './home/header/header.component';
import { ForgotComponent } from './credintials/forgot/forgot.component';
import { RegisterComponent } from './credintials/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './home/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { DominosUiComponent } from './dominos-ui/dominos-ui.component';
import { DeliveryLocationComponent } from './delivery-location/delivery-location.component';
import { TopBestsellersComponent } from './top-bestsellers/top-bestsellers.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { GiftComponent } from './gift/gift.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    ForgotComponent,
    MenuComponent,
    FooterComponent,
    DominosUiComponent,
    DeliveryLocationComponent,
    TopBestsellersComponent,
    MyprofileComponent,
    ContactComponent,
    CartComponent,
    EnquiryComponent,
    GiftComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // 🔥 Must be first
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


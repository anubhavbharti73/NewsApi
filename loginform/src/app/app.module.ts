import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ResetComponent } from './reset/reset.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewsComponent } from './news/news.component';
import { UpdateComponent } from './update/update.component';
import { FakewalletComponent } from './fakewallet/fakewallet.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminforgotpassComponent } from './adminforgotpass/adminforgotpass.component';
import { AdminresetpassComponent } from './adminresetpass/adminresetpass.component';
import { NonpremiumComponent } from './nonpremium/nonpremium.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    LoginComponent,
    ForgotPassComponent,
    ResetComponent,
    PagenotfoundComponent,
    RegComponent,
    NewsComponent,
    UpdateComponent,
    FakewalletComponent,
    AdminRegisterComponent,
    AdminloginComponent,
    AdminforgotpassComponent,
    AdminresetpassComponent,
    NonpremiumComponent,
    HomeComponent,
   
  ],
  imports: [   
    AppRoutingModule,    
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

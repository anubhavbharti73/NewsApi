import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ResetComponent } from './reset/reset.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewsComponent } from './news/news.component';
import { UpdateComponent } from './update/update.component';
import { SignupforComponent } from './signupfor/signupfor.component';


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
    SignupforComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

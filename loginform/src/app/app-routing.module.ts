import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminforgotpassComponent } from './adminforgotpass/adminforgotpass.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminresetpassComponent } from './adminresetpass/adminresetpass.component';
import { FakewalletComponent } from './fakewallet/fakewallet.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { NewsComponent } from './news/news.component';
import { NonpremiumComponent } from './nonpremium/nonpremium.component';
;
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegComponent } from './reg/reg.component';
import { ResetComponent } from './reset/reset.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [

{path:'',redirectTo:'home',pathMatch:'full'},
{path:"home",component:HomeComponent},
{path:"reg",component:RegComponent},
{path:"wallet",component:FakewalletComponent},
{path:"login",component:LoginComponent},
{path:"forgot",component: ForgotPassComponent},
{path:"reset", component: ResetComponent},
{path:"news/:userId", component:NewsComponent },
{path:"n-news/:userId",component:NonpremiumComponent},
{path:"update/:userId",component:UpdateComponent},
{path:"adminreg",component:AdminRegisterComponent},
{path:"adminlogin", component:AdminloginComponent},
{path:"adminforgotpass",component:AdminforgotpassComponent},
{path:"adminresetpass",component:AdminresetpassComponent},
{path:"admindesk",component:AdminDashboardComponent},
{path:'**', component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

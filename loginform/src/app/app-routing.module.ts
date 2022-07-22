import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { LoginComponent } from './login/login.component';

import { NewsComponent } from './news/news.component';
;
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegComponent } from './reg/reg.component';
import { ResetComponent } from './reset/reset.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [

  {path:'',redirectTo:'login',pathMatch:'full'},
{path:"reg",component:RegComponent},
{path:"login",component:LoginComponent},
{path:"forgot",component: ForgotPassComponent},
{path:"reset", component: ResetComponent},
{path:"news/:userId", component:NewsComponent },
{path:"update/:userId",component:UpdateComponent},
{path:'**', component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyBeneficiariesComponent } from './components/my-beneficiaries/my-beneficiaries.component';
import { MyConditionsComponent } from './components/my-conditions/my-conditions.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';

const routes: Routes = [
  {path:'mybeneficiaries/:id', component: MyBeneficiariesComponent},
  {path:'myCondition/:id', component: MyConditionsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'**', pathMatch:'full', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

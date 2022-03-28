import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyBeneficiariesComponent } from './components/my-beneficiaries/my-beneficiaries.component';
import { MyConditionsComponent } from './components/my-conditions/my-conditions.component';

const routes: Routes = [
  {path:'mybeneficiaries/:id', component: MyBeneficiariesComponent},
  {path:'myCondition/:id', component: MyConditionsComponent},
  {path:'**', pathMatch:'full', redirectTo: 'mybeneficiaries/0'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { LateralNavComponent } from './shared/lateral-nav/lateral-nav.component';
import { MyBeneficiariesComponent } from './components/my-beneficiaries/my-beneficiaries.component';
import { AccordionComponent } from './shared/accordion/accordion.component';
import { InputComponent } from './shared/input/input.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './shared/mat-table/table.component';
import { MatNativeDateModule } from '@angular/material/core';
import { GetValuePipe } from './shared/pipes/get-value.pipe';
import { MyConditionsComponent } from './components/my-conditions/my-conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    LateralNavComponent,
    MyBeneficiariesComponent,
    AccordionComponent,
    InputComponent,
    TableComponent,
    GetValuePipe,
    MyConditionsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatNativeDateModule,
    
  ],
  exports:[TableComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

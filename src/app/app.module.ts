import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { BillsComponent } from './bills/bills.component';
import { PrintComponent } from './print/print.component';
import {NgxPrintModule} from 'ngx-print';
import { PrintOneComponent } from './print-one/print-one.component';
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    BillsComponent,
    PrintComponent,
    PrintOneComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

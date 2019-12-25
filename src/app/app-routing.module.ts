import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { BillsComponent } from './bills/bills.component';
import { PrintComponent } from './print/print.component';
import { PrintOneComponent } from './print-one/print-one.component';


const routes: Routes = [
  {path:'add',component:AddProductComponent},
{path:'bills',component:BillsComponent},
{path:'print',component:PrintComponent},
{path:'print/:id',component:PrintOneComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

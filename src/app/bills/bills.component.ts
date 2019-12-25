import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from '../add-product/data.model';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  data:data[]=[];
  value:any;
  details:any[]=[];
  form: any;
  tests:any;
  constructor(private _http:HttpClient,private _formBuilder:FormBuilder) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      productInvoice: this._formBuilder.array([]),
    });
   
    this._http.get('http://localhost/api/product').subscribe(
      (res:any) => {
        if(res.success)
        {
          console.log('res',res.message);
          this.data = res.message as data[];
          console.log('res', this.data);
        //   this.message = res.message;
        //  document.getElementById("myModal").style.display = "block";
        }
         else
         {
          console.log('res',res);
          // this.message = 'false';
          // document.getElementById("myModal").style.display = "block";
         }
      } 
    )
    console.log('done');
    // dynamicForm(selectedTarget, plusSelector, minusSelector, options)

  }
  test(event:any)
  {
     this.value = event.target.value;
     console.log('value', event.target.value)
  }
 
 
 
  delete(i)
  {
    console.log('this.form',this.form.value.productInvoice)
    this.form.value.productInvoice = this.form.value.productInvoice.filter((item,index) => {
    //  console.log('this.details', index, 'kkk', item.id)
     if(i == index){
      console.log('this.details: ', i, 'index: ', index)
      const control = <FormArray>this.form.controls['productInvoice'];
      control.removeAt(i);
            //return this.form.value.productInvoice.splice(index, 1)
     }
     
     
   })

  
   

  }
  addCreds() {
    const creds = this.form.controls.productInvoice as FormArray;
    creds.push(this._formBuilder.group({
      product: '',
        productUnit: '',
        quantity: '',
        taxVat: '',
    }));
    // console.log('creds',creds);
    
  }
 save()
 {
  console.log(' this.details', this.form.value);
  this._http.post('http://localhost/api/invoice/add', this.form.value).subscribe(
      (response:any) => {
        if(response.success)
        {
          this.form.value.productInvoice= [];
          console.log('response',response)
        }
      
      }
    )
 }
}

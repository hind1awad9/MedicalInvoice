import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { data } from '../add-product/data.model';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  dataForm:FormGroup;
  data:data[]=[];
  value:any;
  details:any[]=[];
  forms:any[]=[1];
  constructor(private _http:HttpClient,private _formBuilder:FormBuilder) { }

  ngOnInit() {
    this.dataForm = this._formBuilder.group(
      {
        _id: [''],
        productUnit: [''],
        quantity: [''],
        taxVat: [''],
        // box: [''],
        // packet: [''],
        // code: ['']
      }
    )
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
    console.log('done')
  }
  test(event:any)
  {
     this.value = event.target.value;
    console.log('value',this.value)
  }
  add()
  {
    this.dataForm.get('productUnit').setValue(''),
    this.dataForm.get('quantity').setValue('')
    this.dataForm.get('taxVat').setValue('')
    this.dataForm.get('_id').setValue('')
    this.forms.push(this.forms.length + 1)
    this.details.push({
      product:this.value,
      productUnit:this.dataForm.get('productUnit').value,
      quantity:this.dataForm.get('quantity').value,
      taxVat:this.dataForm.get('taxVat').value,
    })
  }
  addBills()
  {
    console.log('details',this.details)
    this.details.push({
      product:this.value,
      productUnit:this.dataForm.get('productUnit').value,
      quantity:this.dataForm.get('quantity').value,
      taxVat:this.dataForm.get('taxVat').value,
    })
    console.log('details',this.details)
    this._http.post('http://localhost/api/invoice/add', this.details).subscribe(
      (response:any) => {
        console.log('response',response)
      }
    )
     

  }
}

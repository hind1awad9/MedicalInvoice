import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
dataForm:FormGroup;
message:string;
  constructor(private _http:HttpClient,private _formBuilder:FormBuilder) { }

  ngOnInit() {
    this.dataForm = this._formBuilder.group(
      {
        name: [''],
        originalPrice: [''],
        sellingPrice: [''],
        peice: [''],
        box: [''],
        packet: [''],
        code: ['']
      }
    )
  }
  addProduct()
  {
    this._http.post('http://localhost/api/product/add', this.dataForm.value).subscribe(
      (res:any) => {
        if(res.success)
        {
          console.log('res',res);
          this.message = res.message;
         document.getElementById("myModal").style.display = "block";
        }
         else
         {
          this.message = 'false';
          document.getElementById("myModal").style.display = "block";
         }
      } 
    )
    console.log('done')
  }
  close()
  {
     document.getElementById("myModal").style.display = "none";
  }
}


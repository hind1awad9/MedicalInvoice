import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { data } from '../add-product/data.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  data:data;
  dataForm:FormGroup;
  message:string;
  constructor(private _http:HttpClient,private route: ActivatedRoute,private _formBuilder:FormBuilder) { }

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
    this.route.paramMap.subscribe(params => {
      console.log('lklkll',params.get('id')) ;
      const id = params.get('id');
      console.log(id);
      this._http.get(`http://localhost/api/product/details/${id}`).subscribe(
        (res:any) => {
          if(res.success)
          {
            console.log('res',res);
            this.data = res.message as data;
            // console.log('res', this.data.Invoices);
          }
           else
           {
            console.log('res',res);
            // this.message = 'false';
            // document.getElementById("myModal").style.display = "block";
           }
        } 
      )
     
      });
  }
  clean(obj) {
    let objectCopy = Object.assign({}, obj);
    for (var propName in objectCopy) { 
      if (objectCopy[propName] === null || objectCopy[propName] === undefined || objectCopy[propName] === '') {
        delete objectCopy[propName];
      }
    }
    return objectCopy;
  }
  update(id)
  {
    let object = {
      name:this.dataForm.get('name').value,
      code:this.dataForm.get('code').value,
      sellingPrice:this.dataForm.get('sellingPrice').value,
      originalPrice:this.dataForm.get('originalPrice').value,
      peice:this.dataForm.get('peice').value
    }
    let final = this.clean(object);
    this._http.put(`http://localhost/api/product/edit/${id}`,final).subscribe(
      (res:any) => {
        if(res.success)
        {
          console.log('res',res);
          this.message = res.message ;
          document.getElementById("myModal").style.display = "block";
          // console.log('res', this.data);
        }
         else
         {
          console.log('res',res);
           this.message = 'false';
           document.getElementById("myModal").style.display = "block";
         }
      } 
    )
  }
  close()
  {
     document.getElementById("myModal").style.display = "none";
  }
}

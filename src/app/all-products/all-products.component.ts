import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from '../add-product/data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  data:data[]=[];
  message:string;
  constructor(private _http:HttpClient,private _router:Router) { }

  ngOnInit() {
    this._http.get('http://localhost/api/product').subscribe(
      (res:any) => {
        if(res.success)
        {
          console.log('res',res);
          this.data = res.message as data[];
          console.log('res', this.data);
        }
         else
         {
          console.log('res',res);
          // this.message = 'false';
          // document.getElementById("myModal").style.display = "block";
         }
      } 
    )
  
  }

  remove(id)
  {
    this._http.delete(`http://localhost/api/product/remove/${id}`).subscribe(
      (res:any) => {
        if(res.success)
        {
          console.log('res',res);
          this.data = this.data.filter((item:any) => {
          return item._id != id
        })
        this.message = res.message;
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
  onClick(billID: number)
  {
    this._router.navigate(['/updateProduct',billID]);
 

  }
  close()
  {
     document.getElementById("myModal").style.display = "none";
  }
}

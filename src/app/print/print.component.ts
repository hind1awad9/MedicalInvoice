import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { data } from '../add-product/data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})

export class PrintComponent implements OnInit {
  public x = true;
data:data[]=[]
  constructor(private _http:HttpClient,private _router:Router) { }

  ngOnInit() {
    
    this._http.get('http://localhost/api/invoice').subscribe(
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
 
  onClick(billID: number)
  {
    this._router.navigate(['/print',billID]);
    this.x == false;
 

  }
}

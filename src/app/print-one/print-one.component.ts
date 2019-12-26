import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from '../add-product/data.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-print-one',
  templateUrl: './print-one.component.html',
  styleUrls: ['./print-one.component.css']
})
export class PrintOneComponent implements OnInit {
  data:any;
  constructor(private _http:HttpClient,private route: ActivatedRoute) { }

  ngOnInit() {
   
    this.route.paramMap.subscribe(params => {
      console.log('lklkll',params.get('id')) ;
      const id = params.get('id');
      console.log(id);
      this._http.get(`http://localhost/api/invoice/details/${id}`).subscribe(
        (res:any) => {
          if(res.success)
          {
            console.log('res',res);
            this.data = res.message as data;
            console.log('res', this.data.Invoices);
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

}

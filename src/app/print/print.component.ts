import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { data } from '../add-product/data.model';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
data:data[]=[]
  constructor(private _http:HttpClient,private _formBuilder:FormBuilder) { }

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
  // onPreview(){
  //   let printContents = '';
  //   const WindowObject = window.open('','PrintWindow','width=750,height=650,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes'
  //   );
  //   printContents += `<table>
  //                    <tr>
  //                      <th>Date</th>
  //                      <th>ApplicationStatus</th> 
  //                      <th>SubmittedBy</th>
  //                    </tr>`;
  //   this.data.map((data:any) => {
  //        printContents += `<tr>
  //                      <td>${data.invoiceTotalPrice}</td>
  //                      <td>${data.invoiceTotalPrice}</td> 
  //                      <td>${data.invoiceTotalPrice}</td>
  //                    </tr>`;
  //   const htmlData = `<html><body>${printContents}</body></html>`;
  
  //   WindowObject.document.writeln(htmlData);
  //   WindowObject.document.close();
  //   WindowObject.focus();
  //   setTimeout(() => {
  //     WindowObject.close();
  //   }, 0.5);
  // })}
  
}

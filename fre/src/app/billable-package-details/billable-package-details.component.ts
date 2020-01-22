import { Component, OnInit } from '@angular/core';
import { BillableEmployeesService } from '../billable-employees.service';

@Component({
  selector: 'app-billable-package-details',
  templateUrl: './billable-package-details.component.html',
  styleUrls: ['./billable-package-details.component.css']
})
export class BillablePackageDetailsComponent implements OnInit {
  items:any = [];
  
  packageDetails = {
    _id: null,
    dateOfPaymentByTyss: null,
    dateOfPaymentByClient: null,
    paymentByTyss: null,
    paymentByClient: null,
   
  }


  constructor(private service2 : BillableEmployeesService  ) { 
    this.getClientDetails();
  }
 
  private packageDetail : any = [];

  getClientDetails() {
    this.service2.getPackageData().subscribe(details =>{
      this.items = details;
      console.log(this.packageDetail);
    }, err =>{
      console.log(err);
    }, () =>{
      console.log("packageDetail got successfully");
    })
 }

 onChangePage(packageDetail :Array<any>){
  this.packageDetail = packageDetail;
}

  ngOnInit() {
    this.items = Array(168).fill(0).map((x,i) =>({id:(i+1), name:`${i+1}`}));

  }

}

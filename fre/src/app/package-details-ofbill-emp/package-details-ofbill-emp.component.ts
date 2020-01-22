import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BillableEmployeesService } from '../billable-employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-details-ofbill-emp',
  templateUrl: './package-details-ofbill-emp.component.html',
  styleUrls: ['./package-details-ofbill-emp.component.css']
})
export class PackageDetailsOfbillEmpComponent implements OnInit {

  constructor(private billableEmployyesDetailsservice: BillableEmployeesService, private router: Router) { }




  postBillableEmployeesPackageDetails(form: NgForm) {
    console.log(form.value);
    this.billableEmployyesDetailsservice.postBillableEmployeesPackageDetails(form.value).subscribe(BillableEmployeesDetails => {
      console.log(BillableEmployeesDetails);
      form.reset();
    }, err => {
      console.log(err);
    }, () => {
      console.log('Billable Employees Package Posted Successfully');
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { BillableEmployeesService } from '../billable-employees.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-billableemployeesinfo',
  templateUrl: './billableemployeesinfo.component.html',
  styleUrls: ['./billableemployeesinfo.component.css']
})
export class BillableemployeesinfoComponent implements OnInit {
  private billEmployeesDetails: any = [];

  constructor(private billableEmployeesService: BillableEmployeesService) {
    this.getBillableEmployeesInfo();
   }
  billableEmployeesDetails: any;
  items: any;
  getBillableEmployeesInfo() {
    this.billableEmployeesService.getBillableEmployeesDetails().subscribe(billableEmployeesDetails => {
      this.billableEmployeesDetails = billableEmployeesDetails;
      this.items = billableEmployeesDetails;
    }, err => {
      console.log(err);
    }, () => {
      console.log('billableEmployeesDetails got Successfully');
    });
  }


  onChangePage(billEmployeesDetails: Array<any>) {
    this.billEmployeesDetails = billEmployeesDetails;
  }
  ngOnInit() {
    this.items = Array(168).fill(0).map((x, i) => ({ id: (i + 1), name: `${i + 1}` }));
    $(document).ready(function() {
      $('.clickable-row').click(function() {
        window.location = $(this).data('href');
      });
    });
  }

}

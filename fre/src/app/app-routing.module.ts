import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsDetailsComponent } from './clients-details/clients-details.component';
import { ClientsInfoComponent } from './clients-info/clients-info.component';
import { DisplayimageComponent } from './displayimage/displayimage.component';
import { BillableEmployeesComponent } from './billable-employees/billable-employees.component';
import { ClientsLogoComponent } from './clients-logo/clients-logo.component';
import { BillableComponent } from './billable/billable.component';
import { ClientsdataComponent } from './clientsdata/clientsdata.component';
import { BillabletableComponent } from './billabletable/billabletable.component';
import { NonBillableComponent } from './non-billable/non-billable.component';
import { RevenueDetialsComponent } from './revenue-detials/revenue-detials.component';
import { BillableemployeesinfoComponent } from './billableemployeesinfo/billableemployeesinfo.component';
import { PackageDetailsOfbillEmpComponent } from './package-details-ofbill-emp/package-details-ofbill-emp.component';
import { BillablePackageDetailsComponent } from './billable-package-details/billable-package-details.component';


const routes: Routes = [
  { path: 'home', component: DisplayimageComponent},
  { path: 'clientsDetails', component: ClientsDetailsComponent},
  { path: 'clientsInfo', component: ClientsInfoComponent},
  { path: 'billableEmployeesDetails', component: BillableEmployeesComponent},
  { path: 'clientsLogo', component: ClientsLogoComponent},
  { path: 'BillableEmployees', component: BillableComponent},
  { path: 'nonBillable', component: NonBillableComponent},
  { path: 'RevenueDetails', component: RevenueDetialsComponent},
  { path: 'clientsdata', component: ClientsdataComponent},
  { path: 'billableTable', component: BillabletableComponent},
  { path: 'billableEmployeesInfo', component: BillableemployeesinfoComponent},
  { path: 'packageDetailsbillEmp', component: PackageDetailsOfbillEmpComponent},
  { path: 'PackageInfoOfBillEmp', component: BillablePackageDetailsComponent}








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

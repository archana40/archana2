import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientDetailsComponent } from './client-details/client-details.component';


const routes: Routes = [
  { path: 'client' , component: ClientFormComponent},
  { path: 'dashboard' , component: DashboardComponent},
  { path: 'client-details' , component: ClientDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

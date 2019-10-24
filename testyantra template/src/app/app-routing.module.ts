import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'aboutUs', component:AboutUsComponent},
  { path:'services', component:ServicesComponent},
  { path:'contactUs', component:ContactUsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

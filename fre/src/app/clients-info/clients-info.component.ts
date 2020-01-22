import { Component, OnInit, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClientsDetailsService } from '../clients-details.service';



@Component({
  selector: 'app-clients-info',
  templateUrl: './clients-info.component.html',
  styleUrls: ['./clients-info.component.css']
})
export class ClientsInfoComponent implements OnInit {

  private clientsDetails: any = [];
  items: any = [];

  clientDetails = {
    _id: null,
    clientName: null,
    clientShortName: null,
    department: null,
    email: null,
    phone: null,
    companyWebsite: null,
    // image: null,
    city: null,
    streetAddress: null,
    state: null ,
    zipCode: null ,
    country: null
  };
  // tslint:disable-next-line: max-line-length
  constructor(private clientService: ClientsDetailsService, private http: HttpClient , private router: Router) {
    this.getClientsDetails();
   }



  particularRow(data) {
    console.log(data);
    this.clientDetails = data;
  }
  ngOnInit() {
    this.items = Array(168).fill(0).map((x, i) => ({ id: (i + 1), name: `${i + 1}` }));
    $(document).ready(function() {
      $('.clickable-row').click(function() {
        window.location = $(this).data('href');
      });
    });
  }

  getClientsDetails() {
    this.clientService.getClientsDetails().subscribe(clientsDetails => {
      console.log(clientsDetails);
      this.items = clientsDetails;
    }, err => {
      console.log(err);
    }, () => {
      console.log('Client Details got successfully');
    });
      }


  onChangePage(clientsDetails: Array<any>) {
    this.clientsDetails = clientsDetails;
  }

  updateClients(form: NgForm) {
    console.log(form.value);
    this.clientService.updateClientDetails(form.value).subscribe(updatedClients => {
      console.log(updatedClients);
       this.getClientsDetails();
      this.router.navigateByUrl('/clients-info');
      // form.reset();
    }, err => {
      console.log(err);
    }, () => {
      console.log('Clients Details Updated Successfully');
    });
    }

    // updateClients(form: NgForm){
    //   console.log(form.value)
    // this.clientService.updateClientDetails(form.value).subscribe(updatedClients=>{
    //   console.log(updatedClients);
    //    this.getClientDetails();
    
    // },err=>{
    //   console.log(err);
    // },()=>{
    //   console.log("Updated clients successfully");
    // })
    // }
    
    

    deleteClients(form: NgForm) {
      this.clientService.deleteClientdetails(form.value._id).subscribe(clients => {
        this.getClientsDetails();
        form.reset();
        console.log(clients);
        setTimeout(fr => {
                    $('#notification').fadeIn('slow').append('Clients details deleted successfully');
                    $('.dismiss').click(function() {
             $('#notification').fadeOut('slow');
      });
        }, );
      } , err => {
        console.log(err);
      }, () => {
        console.log('client Details deleted successfully');
      });
    }
  }



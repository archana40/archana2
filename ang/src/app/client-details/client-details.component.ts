import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  items:any = [];

  constructor(private clientService : ClientService) { 
    this.getClientDetails();
  }

  private clientsDetail : any = [];

 getClientDetails() {
    this.clientService.getClientData().subscribe(clients =>{
      this.items = clients;
      console.log(this.clientsDetail);
    }, err =>{
      console.log(err);
    }, () =>{
      console.log("clients Details got successfully");
    })
 }

 printSelectedRow(data){
   console.log(data);
   
 }

  ngOnInit() {
    this.items = Array(168).fill(0).map((x,i) =>({id:(i+1), name:`${i+1}`}));
  }
 
  onChangePage(clientsDetail :Array<any>){
    this.clientsDetail = clientsDetail;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  backendurl='http://localhost:4000';


  postData(client){
    return this.http.post(`${this.backendurl}/addClient`,client);
  
  }

  getClientData(){
    return this.http.get(`${this.backendurl}/getClient`);
  }
}

import { Component, OnInit } from '@angular/core';
import { ShowimageService } from '../showimage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-logo',
  templateUrl: './clients-logo.component.html',
  styleUrls: ['./clients-logo.component.css']
})
export class ClientsLogoComponent implements OnInit {

  constructor(private showimageservice: ShowimageService, private router: Router) { }
  images: any;
  ngOnInit() {
    this.showimageservice.showImage()
    // tslint:disable-next-line: variable-name
    .subscribe((result_imagename) => {
      this.images = result_imagename.imagename;
      console.log(this.images);
    },
    (err) => {
      console.log(err);
    });
  }
  }



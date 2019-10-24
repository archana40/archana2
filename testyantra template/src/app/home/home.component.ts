import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {

    $(document).ready(function(){
      $("#OpenForm").click(function(){
          $(".feedback_form_area").animate({
              width: "toggle"
          });
      });
  });


  


  }

}

import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $("#animar").click(function(){
      $(".element").animate({marginTop:'80px'},'slow')
      .animate({marginBottom:'80px'}, 'slow')
      .animate({marginBottom:'0px',marginTop:'0px'}, 'slow');
          });
 
          $("#animar").click(function() {
            $(".blogs-main").animate({marginTop:'80px'},'slow')
            .animate({marginBottom:'80px'}, 'slow')
            .animate({marginBottom:'0px',marginTop:'0px'}, 'slow');
                });
       

    $("#animar").click(function(){
      $(".post-list").animate({marginTop:'80px'},'slow')
    .animate({marginBottom:'80px'}, 'slow')
    .animate({marginBottom:'0px',marginTop:'0px'}, 'slow');
    });
 

  }

}

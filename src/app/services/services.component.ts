import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){

      $("#animar").click(function(){
        $(".cardd").animate({marginTop:'80px'},'slow')
        .animate({marginBottom:'80px'}, 'slow')
        .animate({marginBottom:'0px',marginTop:'0px'}, 'slow'); 
            });

       $("#animar").click(function(){
        $("#container").animate({marginTop:'80px'},'slow')
      .animate({marginBottom:'80px'}, 'slow')
      .animate({marginBottom:'0px',marginTop:'0px'}, 'slow');
      });
   
      });










  }

}

import { Component, OnInit } from '@angular/core';
//declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {


  ngOnInit(){

  // $(document).ready(function(){
  // var posts = $("#posts");
  // $("#mostrar").hide();

  // $("#mostrar").click(function(){
 //     $(this).hide();
  //    $("#ocultar").show();

  //    posts.fadeTo('slow',0.8);
  //  });

 //  $("#ocultar").click(function(){
   //   $(this).hide();
   //   $("#mostrar").show();

  //    posts.fadeTo('slow', 0.2);
  //  });

  // $("#todo").click(function(){
  //    posts.slideToggle('fast');
  //  })

  // $("#animar").click(function(){
   //   $("#hero").animate({marginTop:'50px'},'slow')
  //  .animate({marginBottom:'50px'}, 'slow')
   // .animate({marginBottom:'0px',marginTop:'0px'}, 'slow');
  //  });

  //  $("#animar").click(function(){
  //    $("#title").animate({marginLeft:'50px'},'slow')
  //  .animate({marginRight:'50px'}, 'slow')
  //  .animate({marginLeft:'0px',marginRight:'0px'}, 'slow');
  //  });


    
  //  $("#animar").click(function() {
  //    $(".description").toggle("shake");
   //       });

   //     $("#animar").click(function() {
    //        posts.toggle("fall");
     //           });

    //            $("#animar").click(function() {
    //              $("#pdm").animate({marginTop:'50px'},'slow')
    //              .animate({marginBottom:'50px'}, 'slow')
    //              .animate({marginBottom:'0px',marginTop:'0px'}, 'slow');
    //                  });
      


  // });


   

}
}
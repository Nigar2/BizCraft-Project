// function openTab(tabNumber) {
//   var i;
//   var x = document.getElementsByClassName("tabpane");
  
//   /*Add or Remove Active class to buttons*/
//   $('.nav-link').removeClass('nav-link-active');
//   $('.nav-link').click(function() {
//     $(this).addClass('nav-link-active');
//   })

//   /*Add active or remove class to tab contents*/
//   for (i = 0; i < x.length; i++) {
//     x[i].classList.remove("tabpane-active");
 
//   }
//   document.getElementById(tabNumber).classList.add("tabpane-active");

// }


$(".tabpane").hide();
$(".tabpane:first").show();

$(".nav-tabs li").click(function() {

  $(".tabpane").hide();
  var activeTab = $(this).attr("rel"); 
  $("#"+activeTab).fadeIn();		
  $(".nav-tabs li").removeClass("active");
  $(this).addClass("active");


});



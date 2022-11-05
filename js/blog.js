

$(".tabpane").hide();
$(".tabpane:first").show();

$(".nav-tabs a").click(function() {

  $(".tabpane").hide();
  var activeTab = $(this).attr("rel"); 
  $("#"+activeTab).fadeIn();		
  $(".nav-tabs a").removeClass("active");
  $(this).addClass("active");


});


//back to top

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

 //burgerlist//
 const burger = document.querySelector('.burger');
 const navMenu = document.querySelector('.nav-menu');
 const dropdown = document.querySelector(".dropdown");

 burger.addEventListener('click', ()=>{
   burger.classList.toggle("active");
   navMenu.classList.toggle("active");
   dropdown.classList.toggle("active");
 })

 
//nav scroll

function changeS(){
  var navbar = document.getElementById('navbar');
  var scrollValue = window.scrollY;
  if(scrollValue<150){
    navbar.classList.remove('fixed');
  }else{
    navbar.classList.add('fixed');
  }
}

window.addEventListener('scroll',changeS);
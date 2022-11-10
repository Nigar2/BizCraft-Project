//scroll
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

  //burgerlist//
 const burger = document.querySelectorAll('.burger');
 const navMenu = document.querySelector('.nav-menu');
 const dropdown = document.querySelector(".dropdown");
 const navlink= document.querySelector(".nav-link");

 burger.addEventListener('click', (e)=>{
  e.preventDefault();

  navMenu.classList.toggle("active");
  dropdown.classList.toggle("active");
  navlink.classList.toggle("active");
 })
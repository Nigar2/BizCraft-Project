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

 
 
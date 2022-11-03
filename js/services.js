//slider//

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + "</span>";
      // },
    },
  });

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
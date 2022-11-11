function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
  
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
  
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

 
  $(".tabcontent").hide();
  $(".tabcontent:first").show();
  $().click(function() {
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();		
    $(this).addClass("active");
  });


  //number time
  document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 1200, 2000);
    counter("count2", 100, 1277, 2000);
    counter("count3", 0, 869, 2000);
    counter("count4", 0, 76, 2000);
   });

 
//nav scroll

function changeS(){
  var navbar = document.getElementById('navbar');
  var scrollValue = window.scrollY;
  if(scrollValue<100){
    navbar.classList.remove('fixed');
  }else{
    navbar.classList.add('fixed');
  }
}

window.addEventListener('scroll',changeS);
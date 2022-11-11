

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

///filter
function liveSearch() {
  let cards = document.querySelectorAll('.cards')
  let searchinput = document.getElementById("search").value;
 
  for (var i = 0; i < cards.length; i++) {

    if(cards[i].innerText.toLowerCase()
      .includes(searchinput.toLowerCase())) {

        cards[i].classList.remove("is-hidden");
    } else {
      cards[i].classList.add("is-hidden");
    }
  }
}


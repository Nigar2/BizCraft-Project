let titles = document.querySelectorAll('.title');
let blocks = document.querySelectorAll('.block');
let wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', classToggle, false);

function classToggle(event) {
  if (!event.target.classList.contains('title')) {
    return;
  }
  currentBlockClassList = event.target.parentNode.classList;
  isContainsClass = currentBlockClassList.contains('active-block');
  blocks.forEach(block => {
    block.classList.remove('active-block');
  });
  if (!isContainsClass) {
    currentBlockClassList.add('active-block');
  }
}

///////////////////////

let title = document.querySelectorAll('.title2');
let block = document.querySelectorAll('.block2');
let wrapperr = document.querySelector('.wrapper2');

wrapperr.addEventListener('click', classToggle, false);

function classToggle(event) {
  if (!event.target.classList.contains('title2')) {
    return;
  }
  currentBlockClassList = event.target.parentNode.classList;
  isContainsClass = currentBlockClassList.contains('active-block');
  block.forEach(block2 => {
    block2.classList.remove('active-block');
  });
  if (!isContainsClass) {
    currentBlockClassList.add('active-block');
  }
}


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



//back to top

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '100');
});

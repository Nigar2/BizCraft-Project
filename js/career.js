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
$(".tab__content").hide();
    $(".tab__content:first").show();

    $(".tab__head li").click(function() {
	
      $(".tab__content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
      $(".tab__head li").removeClass("active");
      $(this).addClass("active");

	  
    });

    //accordion
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


	var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<li class="' + className + '">' + (index + 1) + "</li>";
      },
    },
  });

  // section-time
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
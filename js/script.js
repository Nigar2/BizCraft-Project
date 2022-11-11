// $(document).ready(function() {

//   setTimeout(function() {
//     $('#ctn-preloader').addClass('loaded');
//     $('body').removeClass('no-scroll-y');

//     if ($('#ctn-preloader').hasClass('loaded')) {
//       $('#preloader').delay(1000).queue(function() {
//         $(this).remove();
//       });
//     }
//   }, 3000);

// });

//nav scroll

function changeS() {
  var navbar = document.getElementById("navbar");
  var scrollValue = window.scrollY;
  if (scrollValue < 150) {
    navbar.classList.remove("fixed");
  } else {
    navbar.classList.add("fixed");
  }
}

window.addEventListener("scroll", changeS);

//slider//

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 5000,
  },
});

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

function openNav() {
  document.getElementById("mySidepanel").style.width = "395px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// init Isotope
var iso = new Isotope(".grid", {
  itemSelector: ".element-item",
  layoutMode: "fitRows",
});

var filterFns = {
  ium: function (itemElem) {
    var name = itemElem.querySelector(".name").textContent;
    return name.match();
  },
};

var filtersElem = document.querySelector(".filters-button-group");
filtersElem.addEventListener("click", function (event) {
  if (!matchesSelector(event.target, "button")) {
    return;
  }
  var filterValue = event.target.getAttribute("data-filter");
  filterValue = filterFns[filterValue] || filterValue;
  iso.arrange({ filter: filterValue });
});

var buttonGroups = document.querySelectorAll(".button-group");
for (var i = 0, len = buttonGroups.length; i < len; i++) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup(buttonGroup);
}
function radioButtonGroup(buttonGroup) {
  buttonGroup.addEventListener("click", function (event) {
    if (!matchesSelector(event.target, "button")) {
      return;
    }
    buttonGroup.querySelector(".is-checked").classList.remove("is-checked");
    event.target.classList.add("is-checked");
  });
}

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

//  clients swiper

var slider = new Swiper(".slider", {
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  freemode: true,
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  speed: 5000,
});

//back to top

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

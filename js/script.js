'use strict'
$(document).ready(function() {
  $('.page_title').owlCarousel({
    items: 1, 
    smartSpeed: 1500,
  })
  $('.slide_img').owlCarousel({
    items: 3, 
    smartSpeed: 1500,
    nav: true,
    margin: 10,
    responsive: {
      1200: {
        items: 3,
      },
      1024: {
        items: 2,
      },
      768: {
        items: 2,
      },
      375: {
        items: 1,
      },
      320: {
        items: 1,
      },
      1: {
        items: 1,
      }
    }
  })
})

// Click hien menu
$('.menu_bars').click(function(e) {
  $('.header_right').toggleClass('show-menu');
  $('.overlay_container').toggleClass('menu_bars_overlay');
  e.stopPropagation();
  e.stopImmediatePropagation();
})

$('.overlay_container').click(function() {
  $('.header_right').removeClass('show-menu');
  $('.overlay_container').removeClass('menu_bars_overlay');
})  

// Sticky header
let header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
  });

// pre-loader
setTimeout(function() {
  $('#pre-loader').addClass('show');
}, 0);

let number = 0;
function demSo() {
  if(number <32) {
    number +=1;
    document.getElementById('count').innerHTML = number + '+';
  } 
}
function findTop(element) {
  var rec = document.querySelector(element).getBoundingClientRect();
  return rec.top;
}
var isShow = true

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > findTop('#count') && isShow) {
    isShow = false
    setInterval(demSo, 100);
  }
});

// swiper 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 4,
  breakpoints: {
    1: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

// responsive 
var swiper4 = new Swiper(".mySwiper4", {
  slidesPerView: 4,
  breakpoints: {
    1: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    577: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

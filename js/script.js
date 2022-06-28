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
    responsive: true,
    responsive: {
      1200: {
        items: 3,
      },
      992: {
        items: 2,
      },
      375: {
        items: 1,
      },
      320: {
        items: 1,
      }
    }
  })
})

// Header Fixed
var headerFixed = function () {
  if ($('body').hasClass('header_fixed')) {
      var nav = $('#header_main');
      if (nav.length) {
          var offsetTop = nav.offset().top,
               headerHeight = nav.height(),
               injectSpace = $('<div />', {
              height: headerHeight
          }).insertAfter(nav);

          $(window).on('load scroll', function () {
              if ($(window).scrollTop() > 200) {
                  nav.addClass('is_fixed');
                  injectSpace.show();
              } else {
                  nav.removeClass('is_fixed');
                  injectSpace.hide();
              }

              if ($(window).scrollTop() > 300) {
                  nav.addClass('is_small');
              } else {
                  nav.removeClass('is_small');
              }
          })
      }
  }
};

$('.menu_bars').click(function() {
  $('.header_right').toggleClass('show-menu');
})


// pre-loader
setTimeout(function() {
  $('#pre-loader').addClass('show');
}, 0);

var number = 0;
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
    768: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
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
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

"use strict"
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1, 
    smartSpeed: 1500,
  })
})

$('.menu_bars').click(function() {
  $('.header_right').toggle('show-menu');
})

// pre-loader
setTimeout(function() {
  $('#pre-loader').addClass('show');
}, 0);
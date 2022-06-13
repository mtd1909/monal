"use strict"
$(document).ready(function() {
  $(".page_title").owlCarousel({
    items: 1, 
    smartSpeed: 1500,
  })
  $(".slide_img").owlCarousel({
    items: 3, 
    smartSpeed: 1500,
    nav: true,
    margin: 30,
  })
})

$('.menu_bars').click(function() {
  $('.header_right').toggle('show-menu');
})

// pre-loader
setTimeout(function() {
  $('#pre-loader').addClass('show');
}, 0);

var number = 0;
function demSo() {
  if(number <32) {
    number +=1;
    document.getElementById("count").innerHTML = number + "+";
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

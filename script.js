var navToggle = document.querySelector(".header__toggle");
var mainNav = document.querySelector(".header__nav-wrapper");
var newsButton = document.querySelector(".news__button");
var newsLine = document.querySelector(".news__line--hide");
var newsCell = document.getElementById('hide-cell');

var cachedWidth = $(window).width();
$(window).resize(function(){
    var newWidth = $(window).width();
    if(newWidth !== cachedWidth){
      $(window).resize(function() {
        if(document.documentElement.clientWidth > 940) {
          mainNav.style.display = "flex";
        }
      });

      $(window).resize(function() {
        if(document.documentElement.clientWidth < 940) {
          mainNav.style.display = "none";
          navToggle.classList.remove('toggle_active');
        }
      });
        cachedWidth = newWidth;
    }
});

navToggle.addEventListener('click', function(){
  if (navToggle.classList.contains('toggle_active'))
  {
    $("#navigation").slideUp('300');
    navToggle.classList.remove('toggle_active');
  }
  else{
    $("#navigation").slideDown('300');
    navToggle.classList.add('toggle_active');
    mainNav.style.display = "flex";
  }
});

var category_btn = document.querySelector(".product__btn");
var category_popup = document.querySelector(".product__catalog-nav");

category_btn.addEventListener('click', function(){
  if (category_btn.classList.contains('btn_active'))
  {
    $("#popup-category").slideUp('200');
    category_btn.classList.remove('btn_active');
  }
  else{
    $("#popup-category").slideDown('200');
    category_btn.classList.add('btn_active');
    category_popup.style.display = "flex";
  }
});

var category_rose_btn = document.querySelector(".product__category-btn--1");
var i = 0;
category_rose_btn.addEventListener('click', function(){
  if (i == 1)
  {
    $("#category-rose--1").slideUp('200');
    i = 0;
  }
  else{
    $("#category-rose--1").slideDown('200');
    i = 1;
  }
});

var category_rose_btn2 = document.querySelector(".product__category-btn--2");
var j = 0;
category_rose_btn2.addEventListener('click', function(){
  if (j == 1)
  {
    $("#category-rose--2").slideUp('200');
    j = 0;
  }
  else{
    $("#category-rose--2").slideDown('200');
    j = 1;
  }
});
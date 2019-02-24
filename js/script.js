//Гамбургер шапка
var navToggle = document.querySelector('.main-header-nav__toggle');
    navOpen = document.querySelector('.main-header-nav__wrapper');

navOpen.classList.remove('main-header-nav__wrapper--open');

navToggle.addEventListener('click', function() {
  if (navOpen.classList.contains('main-header-nav__wrapper--open')) {
    navOpen.classList.remove('main-header-nav__wrapper--open');
  } else {
    navOpen.classList.add('main-header-nav__wrapper--open');
  }
});
//Гамбургер шапка

//Плавний скролл до якорів
var $page = $('html, body');

$('a[href*="#"]').click(function() {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
    return false;
});
//Плавний скролл до якорів

//Аккордеон
$('.main-faq__list .main-faq__item-title').removeClass('main-faq__item-title--open').addClass('main-faq__item-title--close');

$('.main-faq__list').on('click', '.main-faq__item-title', function() {
  $('.main-faq__list .main-faq__item-title').removeClass('main-faq__item-title--open').addClass('main-faq__item-title--close');
  $(this).addClass('main-faq__item-title--open').removeClass('main-faq__item-title--close');
});

$('.main-faq__item-title').on('click', trigger);

function trigger() {
  $('.main-faq__item-text').not($(this).next()).slideUp(400);
  $(this).next().slideToggle(400);
}
//Аккордеон

//Гамбургер підвал
var footerToggle = document.querySelector('.main-footer__toggle');
    footerOpen = document.querySelector('.main-footer__wrapper');

footerOpen.classList.remove('main-footer__wrapper--open');

footerToggle.addEventListener('click', function() {
  if (footerOpen.classList.contains('main-footer__wrapper--open')) {
    footerOpen.classList.remove('main-footer__wrapper--open');
  } else {
    footerOpen.classList.add('main-footer__wrapper--open');
  }
});
//Гамбургер підвал

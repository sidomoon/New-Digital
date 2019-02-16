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

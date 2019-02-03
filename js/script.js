var content = document.querySelectorAll('.main-faq__item-title');
var triggerOne = document.querySelector('.main-faq__item-title--one');
var triggerTwo = document.querySelector('.main-faq__item-title--two');
var triggerThree = document.querySelector('.main-faq__item-title--three');
var triggerFour = document.querySelector('.main-faq__item-title--four');

for (var i = 0; i < content.length; i++) {
  content[i].classList.add('main-faq__item-title--close');
  content[i].classList.remove('main-faq__item-title--open');
}

triggerOne.addEventListener('click', function() {
  if (triggerOne.classList.contains('main-faq__item-title--close')) {
    triggerOne.classList.remove('main-faq__item-title--close');
    triggerOne.classList.add('main-faq__item-title--open');
  } else {
    triggerOne.classList.add('main-faq__item-title--close');
    triggerOne.classList.remove('main-faq__item-title--open');
  }
});

triggerTwo.addEventListener('click', function() {
  if (triggerTwo.classList.contains('main-faq__item-title--close')) {
    triggerTwo.classList.remove('main-faq__item-title--close');
    triggerTwo.classList.add('main-faq__item-title--open');
  } else {
    triggerTwo.classList.add('main-faq__item-title--close');
    triggerTwo.classList.remove('main-faq__item-title--open');
  }
});

triggerThree.addEventListener('click', function() {
  if (triggerThree.classList.contains('main-faq__item-title--close')) {
    triggerThree.classList.remove('main-faq__item-title--close');
    triggerThree.classList.add('main-faq__item-title--open');
  } else {
    triggerThree.classList.add('main-faq__item-title--close');
    triggerThree.classList.remove('main-faq__item-title--open');
  }
});

triggerFour.addEventListener('click', function() {
  if (triggerFour.classList.contains('main-faq__item-title--close')) {
    triggerFour.classList.remove('main-faq__item-title--close');
    triggerFour.classList.add('main-faq__item-title--open');
  } else {
    triggerFour.classList.add('main-faq__item-title--close');
    triggerFour.classList.remove('main-faq__item-title--open');
  }
});

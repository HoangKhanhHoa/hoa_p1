window.onscroll = function(){
  var y = window.scrollY;

  if(y > 0){
    $('.js-header').addClass('header--stuck');
  } else {
    $('.js-header').removeClass('header--stuck');
  }
};

$('.js-search-button').click(function (e) {
  var inputContainer = $(this).prev();

  if(inputContainer.hasClass('form-search__hidden')){
    e.preventDefault();
    inputContainer.removeClass('form-search__hidden');
    inputContainer.find('.form-search__input').focus();
  }
});

$('.js-close-button').click(function (e) {
  var inputContainer = $(this).parents('.form-search__input-container');

  inputContainer.addClass('form-search__hidden');
});

$('.js-review-carousel').slick({
  lazyLoad: 'progressive',
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  fade: true,
  speed: 600,
  autoplaySpeed: 8000,
  dots: true,
  appendDots: $('.js-review-control'),
  dotsClass: 'custom-dots',
  customPaging: function (slider, i) {
    return '<span class="custom-dots__item" role="button"></span>';
  }
});

function switchTab(nextTab) {
  var idNextTab = $(nextTab).attr('data-tab');

  $('.js-tab [data-tab]').removeClass('tab__active');
  $(nextTab).addClass('tab__active');
  $('.carousel-product__main').hide();
  $(`#${idNextTab}`).show();

  $(`#${idNextTab} .js-carousel-product`).slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: $(`#${idNextTab} .control-next`),
    prevArrow: $(`#${idNextTab} .control-prev`)
  });
}

$('.js-tab [data-tab]').click(function (e) {
  var idCurrentTab = $('.js-tab .tab__active').attr('data-tab');

  $(`#${idCurrentTab} .js-carousel-product`).slick('unslick');
  e.preventDefault();
  switchTab(this);
});

switchTab($('.js-tab [data-tab="best-selling-product"]'));

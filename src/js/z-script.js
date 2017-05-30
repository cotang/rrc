jQuery(document).ready(function($){

  function initSlider() {
    /* галерея speakers */
    $('.speakers__gallery').slick({
      infinite: false,
      dots: false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // centerMode: true,
      centerPadding: '0',
      responsive: [
        {
          breakpoint: 919,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }
  initSlider();

  $('.speakers__link--open').click(function(e){
    e.preventDefault();
    $('.speakers__gallery').slick('unslick');
    $(this).hide();
    $(this).closest('.speakers__link-wrapper').find('.speakers__link--close').show();
  });
  $('.speakers__link--close').click(function(e){
    e.preventDefault();
    initSlider();
    $(this).hide();
    $(this).closest('.speakers__link-wrapper').find('.speakers__link--open').show();
  });

  /* Fixed menu */
  var nav = $('.nav');
  var navTopCoord = nav.offset().top;
  var navHeight = $(".nav").outerHeight(true);
  // if ($(window).width() > 1024) {
    $(window).scroll(function () {
      if ($(this).scrollTop() >= navTopCoord ) {
        $(nav).addClass('nav--fixed');
        $('main').css("padding-top", navHeight + "px");
     } else {
        $('main').css("padding-top", 0);
        $(nav).removeClass('nav--fixed');
      }
    });
  // }


  /* плавный скролл */
  $('.nav__list a[href^="#"]').click(function(e){
      e.preventDefault();
      var el = $(this).attr('href');
      $('body, html').animate({
      scrollTop: ($(el).offset().top - navHeight )}, 500);
      return false;
  });


  /* Popup programme */
  $('.culture-block, .address-head__btn, .address__map-img').click( function(e){
    e.preventDefault();
    $('body').css({"overflow":"hidden"});
    $('.overlay').show();
    $( $(this.hash) )
    .show()
    .animate({opacity: 1}, 200);
  });
  /* Close the modal window */
  $('.overlay__bg, .popup__close').click( function(e){
    e.preventDefault();
    $('body').css({"overflow":"auto"});
    $(this).closest('.overlay').find('.popup')
      .animate({opacity: 0}, 200,
        function(){
          $(this).hide();
          $('.overlay').fadeOut(400);
        }
      );
  });

  /* календарь */
  rome(calendar1, { weekStart: 1 });
  rome(calendar2, { weekStart: 1 });

  /* карта в popup */
  var myMap;
  ymaps.ready(function () {
    myMap = new ymaps.Map("YMapsID", {
      center: [59.931896, 30.251621],
      zoom: 15
    });
    var myPlacemark = new ymaps.Placemark([59.931896, 30.251621], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/pointer.png',
      iconImageOffset: [-50, -90],
      iconImageSize: [209, 90],
    });
    myMap.geoObjects.add(myPlacemark);
  });


  $('.nav__item--menu').click(function(e) {
      e.preventDefault();
      $(this).toggleClass('nav__item--menu-bg');
      $(this).closest('.nav').find('.nav__dropdown-list').slideToggle();
  });

  if ($(window).width() < 768) {
    $('.forum-block__img').each(function(){
      $(this).appendTo($(this).closest('.forum-block__text'));
    });
  }




  // /* submenu в services */
  // $('.services__list > .menu-item').mouseenter(function(e) {
  //     e.preventDefault();
  //     $(this).children('.sub-menu').slideDown();
  // });
  // $('.services__list > .menu-item').mouseleave(function(e) {
  //     e.preventDefault();
  //     $(this).children('.sub-menu').slideUp();
  // });




  // $(window).resize(function(){
  //   if ($(window).width() > 768) {
  //     $('.nav__list').show();
  //     $('.nav__hamburger').hide();
  //   } else {
  //     $('.nav__list').hide();
  //     $('.nav__hamburger').show();
  //   }
  // });

  // $(document).mouseup(function (e){
  //   var div = $(".header__map");
  //   if (!div.is(e.target) && div.has(e.target).length === 0) {
  //     div.hide();
  //   }
  // });


});


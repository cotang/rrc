jQuery(document).ready(function($){

  /* галерея speakers */
  $('.speakers__gallery').slick({
    infinite: false,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    centerPadding: '0'
  });

  $('.speakers__link').click(function(e){
    e.preventDefault();
    $('.speakers__gallery').slick('unslick');
    $(this).hide();
  });


  /* Fixed menu */
  var nav = $('.nav');
  var navTopCoord = nav.offset().top;

  // if ($(window).width() > 1024) {
    $(window).scroll(function () {
      if ($(this).scrollTop() >= navTopCoord /* - 27 */ ) {
        $(nav).addClass('nav--fixed');
     } else {
        $(nav).removeClass('nav--fixed');
      }
    });
  // }


  /* плавный скролл */
  $('.nav__list a[href^="#"]').click(function(e){
      e.preventDefault();
      var el = $(this).attr('href');
      $('body, html').animate({
      scrollTop: ($(el).offset().top - $('.nav').outerHeight(true))}, 500);
      return false;
  });


  /* Popup programme */
  $('.culture-block, .address-head__btn').click( function(e){
    e.preventDefault();
    $('body').css({"overflow":"hidden"});
    $('.overlay').show();
    $( $(this.hash) )
    .show()
    .animate({opacity: 1}, 200);
  });
  /* Close the modal window */
  $('.overlay__bg, .popup__close').click( function(){
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
      iconImageSize: [209, 90],
      iconImageOffset: [-50, -90]
    });
    myMap.geoObjects.add(myPlacemark);
  });








  // /* submenu в services */
  // $('.services__list > .menu-item').mouseenter(function(e) {
  //     e.preventDefault();
  //     $(this).children('.sub-menu').slideDown();
  // });
  // $('.services__list > .menu-item').mouseleave(function(e) {
  //     e.preventDefault();
  //     $(this).children('.sub-menu').slideUp();
  // });


  // $('.hamburger').click(function(e) {
  //     e.preventDefault();
  //     $(this).closest('.header__nav').find('.nav__list').slideToggle();
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


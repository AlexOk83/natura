jQuery(document).ready(function () {

  var $ = jQuery, $doc = $(document), $win = $(window);
    $('.index__slider').owlCarousel({
        loop: true,
        nav: true,
        dotsEach: true,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        navigation: true,
        navText: [],
        items: 1
    });

    $('.product_slider').owlCarousel({
        loop: true,
        nav: true,
        dotsEach: true,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        navigation: true,
        navText: [],
        items: 1
    });

    $('.products_slider').owlCarousel({
        loop: true,
        nav: true,
        dotsEach: true,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        navigation: true,
        navText: [],
        items: 2
    });
    $('.project_design_wrapper_mobile').owlCarousel({
        loop: true,
        nav: true,
        dotsEach: true,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        navigation: true,
        navText: [],
        items: 1
    });
    $('a[href^="#"]').click(function(e){
      e.preventDefault();
        var el = $(this).attr('href');
        console.log($(el).offset());
      $('html, body').stop().animate(
          {
            scrollTop: $(el).offset() && $(el).offset().top
          }, 1000);
        return false;
    });
  $('.eye').click(function () {
    var p = $(this).parent();
    $(this).toggleClass('eye--close');
    if ($(this).hasClass('eye--close')) {
      $('input', p).attr('type', 'text');
    } else {
      $('input', p).attr('type', 'password');
    }

  });

  $('.order_cart_mobile .block_title--cart').click(function () {
      $(this).toggleClass('active');
      if($(this).hasClass('active')) {
          $('.order_cart_mobile .block_content').css('display', 'flex')
      }else {
          $('.order_cart_mobile .block_content').hide()
      }
  })
  $('.order_history_mobile_item').click(function () {
      $(this).toggleClass('active');
      if($(this).hasClass('active')) {

          $(this).find('.block-body').show()
      }else {

          $(this).find('.block-body').hide()
      }
  })
  $('.block-header--show').click(function () {
      $(this).parent().parent().toggleClass('active');
      if($(this).parent().parent().hasClass('active')) {
          $(this).parent().parent().find('block-body').css('display', 'block')
      }else {
          $('.order_cart_mobile .block_content').hide()
      }
  })

    $('.modal__window .wrapper').append('<div class="close" ></div>')
    $('.modal__window .close').click(function () {
        $(this).parent().parent().removeClass('active')
        $(this).parent().parent().parent().removeClass('active')
    })
  $('.menu__item a').click(function (e) {
    if ($win.width() >= 1024) {
      if ($(this).attr('data-menu')) {
        e.preventDefault();
        var id = $(this).attr('data-menu');
        var p = $(this).parent();
        $('.menu__item').removeClass('active');
        $('.sub-menu').removeClass('active');
        $('#'+ id).addClass('active');
        p.addClass('active');
      }
    }
  });

  $('.menu__item a').mouseover(function (e) {
      e.preventDefault();
      var id = $(this).attr('data-menu');
      var p = $(this).parent();
      $('.menu__item').removeClass('active');
      $('.sub-menu').removeClass('active');
      $('#' + id).addClass('active');
      p.addClass('active');
  });

  $('.button__toggle-menu').click(function () {
    $('.menu').toggleClass('active');
    $('.button__toggle-menu').toggleClass('menu-open');
    $('body').toggleClass('not-active');
    if (!$('.menu').hasClass('active')) {
      $('.sub-menu').removeClass('active');
      $('[data-menu]').removeClass('active');
    }

  });
  $('.button__search').click(function () {
    $('.header__right').addClass('with-search');
    $('.header__logo').hide();
    $('.search input').focus();
  });
  $('.button__clear').click(function () {
    $('.header__right').removeClass('with-search');
    $('.header__logo').show();
  });

  $(document).click(function (event) {
    if ($(event.target).closest(".button").length) return;
    if ($(event.target).closest(".modal__window").length) return;
    if ($(event.target).closest(".modal__product").length) return;
    if ($(event.target).closest("[data-link]").length) return;
    if ($(event.target).closest(".menu").length) return;

    $('.modal__window').removeClass('active');
    $('.modal__overlay').removeClass('active');

    $('.button').removeClass('active');


    $('.menu').removeClass('active');
    $('.button__toggle-menu').removeClass('menu-open');


    event.stopPropagation();
  });

  $('.sub-menu__text a').mouseover(function () {
    $('.sub-menu__text a').addClass('not_hover');
    $(this).removeClass('not_hover');
  }).mouseout(function () {
    $('.sub-menu__text a').removeClass('not_hover');
  });

  $('[data-tab]').click(function () {

    var link = $(this).attr('data-tab');
      if($(this).parent().hasClass('limit_2'))
      {
          $(this).parent().find('.tabs__item').removeClass('active');
          $(this).parent().nextAll('.tabs__container').slice(0, 2).removeClass('active');
      }else{
          $('.tabs__item').removeClass('active');
          $('.tabs__container').removeClass('active');
      }

    $('#' + link).addClass('active');
    $(this).addClass('active');

  });

  $('[data-link]').click(function (e) {
    e.preventDefault();
    var link = $(this).attr('data-link');
    $('.modal__window').removeClass('active');
    $('.modal__overlay').removeClass('active');
    $('.button').removeClass('active');
    $('.menu').removeClass('active');
    $('.button__toggle-menu').removeClass('menu-open');
    $('#' + link).addClass('active');
    $(this).addClass('active');

  });
});

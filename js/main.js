$(function() {

  $('.menu a').on('click', function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });

  window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 920) {
      $(".menu__btn").addClass("menu__btn--scroll");
      $(".menu__link").css({ color: "#fff", "font-weight": "500" });
      $(".logo path").css({ fill: "#fff" });
      $(".header__top").css({ background: "#000" });
      $(".header__top").css({ boxShadow: "0 8px 6px -6px grey" });
    }

    if (920 > scrolled) {
      $(".menu__btn").removeClass("menu__btn--scroll");
      $(".menu__link").css({ color: "white", "font-weight": "300" });
      $(".logo path").css({ fill: "white" });
      $(".menu__btn span").css({ backgroundColor: "#fff" });
      $(".header__top").css({ background: "none" });
      $(".header__top").css({ boxShadow: "none" });
    }
    
  };

  $('.slider__blog-inner').slick({
    dots: true,
    arrows: false,
  });

  $('.menu__btn, .menu a').on('click', function () {
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });
  
  var mixer = mixitup('.gallery__content');
});

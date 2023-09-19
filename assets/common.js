jQuery(document).ready(function ($) {
  // document start

  // Navbar
  $("<span class='clickD'></span>").insertAfter(
    ".navbar-nav li.menu-item-has-children > a"
  );
  $(".navbar-nav li .clickD").click(function (e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.next().hasClass("show")) {
      $this.next().removeClass("show");
      $this.removeClass("toggled");
    } else {
      $this.parent().parent().find(".sub-menu").removeClass("show");
      $this.parent().parent().find(".toggled").removeClass("toggled");
      $this.next().toggleClass("show");
      $this.toggleClass("toggled");
    }
  });

  $(window).on("resize", function () {
    if ($(this).width() < 1025) {
      $("html").click(function () {
        $(".navbar-nav li .clickD").removeClass("toggled");
        $(".toggled").removeClass("toggled");
        $(".sub-menu").removeClass("show");
      });
      $(document).click(function () {
        $(".navbar-nav li .clickD").removeClass("toggled");
        $(".toggled").removeClass("toggled");
        $(".sub-menu").removeClass("show");
      });
      $(".navbar-nav").click(function (e) {
        e.stopPropagation();
      });
    }
  });
  // Navbar end

  /* ===== For menu animation === */
  $(".navbar-toggler").click(function () {
    $(".navbar-toggler").toggleClass("open");
    $(".navbar-toggler .stick").toggleClass("open");
    $("body,html").toggleClass("open-nav");
  });

  // Navbar end

  // fixed nav bar
  // $(window).scroll(function() {
  //     var scroll = $(window).scrollDown();
  //     if (scroll > 100) {
  //         $(".main-head").addClass("fixed");
  //     }
  //     else {
  //       $(".main-head").removeClass("fixed");
  //     }
  // })

  // var lastScroll = 0;
  // var isScrolled = false;
  // window.addEventListener("scroll", function () {
  //   var topHeader = document.querySelector(".main-head");
  //   var currentScroll =
  //     window.pageYOffset ||
  //     document.documentElement.scrollTop ||
  //     document.body.scrollTop ||
  //     0;
  //   var scrollDirection = currentScroll < lastScroll;
  //   var shouldToggle = isScrolled && scrollDirection;
  //   isScrolled = currentScroll > 100;
  //   topHeader.classList.toggle("fixed", shouldToggle);
  //   lastScroll = currentScroll;
  // });

  /*testimonial*/
  $(".product-slider").slick({
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: "250px",
    pauseOnHover: true,
    dots: false,
    navs: false,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          centerPadding: "180px",
        },
      },
      {
        breakpoint: 1440,
        settings: {
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
          navs: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: "150px",
          speed: 2000,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          speed: 2000,
        },
      },
    ],
  });

  $(".product-details-slider").slick({
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    navs: true,
  });

  $(".product-thumb-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    navs: false,
    dots: true,
  });

  /*testimonial end*/

  /*new*/
  $(".categori-wrap .categori-col").mouseenter(function () {
    $(".categori-wrap .categori-col").removeClass("active");
    $(this).addClass("active");
  });

  $(".product-cat-filter ul li a").click(function () {
    $(".product-cat-filter ul li").removeClass("active");
    $(this).parent("li").addClass("active");
  });

  $(".faq-nav ul li a").click(function () {
    $(".faq-nav ul li").removeClass("active");
    $(this).parent("li").addClass("active");
  });

  $(window).resize(function () {
    if ($(window).width() < 767) {
      $(".product-details-col2").appendTo(".product-details-col ul");
    }
  });

  // Get the current URL
  var currentUrl = window.location.href;

  // Define the URL of your home page
  var homePageUrl = "https://cobrascoffee.com/"; // Replace with your actual home page URL

  // Check if the current URL is the same as the home page URL
  if (currentUrl === homePageUrl) {
    $.scrollify({
      section: ".scroll-section",
      interstitialSection: "",
      scrollSpeed: 600,
      offset: 0,
      scrollbars: true,
      standardScrollElements: "",
      setHeights: true,
      overflowScroll: true,
      updateHash: false,
      touchScroll: true,
      before: function () {},
      after: function () {},
      afterResize: function () {},
      afterRender: function () {},
    });
  }

  var controller = new ScrollMagic.Controller();

  // build scene
  var scene = new ScrollMagic.Scene({
    triggerHook: 1,
    triggerElement: "#fixed-target",
    pushFollowers: false,
  })
    .setPin("#fixed-footer")
    .addTo(controller);
  // document end
});

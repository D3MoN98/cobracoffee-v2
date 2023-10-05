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

  $(".product-slider")
    .on("mouseenter", function () {
      console.log("ok");
      $(".product-slider").slick("slickPause");
    })
    .on("mouseleave", function () {
      console.log("ol");
      $(".slider").slick("slickPlay");
    });

  $(".product-details-slider").slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
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

  // var controller = new ScrollMagic.Controller();

  // // // build scene
  // var scene = new ScrollMagic.Scene({
  //   triggerHook: 1,
  //   triggerElement: "#fixed-target",
  //   pushFollowers: false,
  // })
  //   .setPin("#fixed-footer")
  //   .addTo(controller);

  const scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  });

  //AOS animation
  // AOS.init();

  //responsive tabs
  $(".res-tbs-btn").click(function (e) {
    e.preventDefault();

    $(".faq-tbs-content .faq-accordion").removeClass("active");
    $(this).parent(".tab-pane").find(".faq-accordion").addClass("active");
  });

  ///custom select///
  var x, i, j, l, ll, selElmnt, a, b, c;
  /*look for any elements with the class "custom-select":*/
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
  except the current select box:*/
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);

  // document end
});

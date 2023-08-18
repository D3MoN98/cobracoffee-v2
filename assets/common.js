jQuery(document).ready(function($){
// document start


 // Navbar
 $( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
 $('.navbar-nav li .clickD').click(function(e) {
     e.preventDefault();
     var $this = $(this);
     if ($this.next().hasClass('show'))
        {
            $this.next().removeClass('show');
            $this.removeClass('toggled');
        } 
        else 
        {
            $this.parent().parent().find('.sub-menu').removeClass('show');
            $this.parent().parent().find('.toggled').removeClass('toggled');
            $this.next().toggleClass('show');
            $this.toggleClass('toggled');
        }
 });

 $(window).on('resize', function(){
     if ($(this).width() < 1025) {
         $('html').click(function(){
             $('.navbar-nav li .clickD').removeClass('toggled');
             $('.toggled').removeClass('toggled');
             $('.sub-menu').removeClass('show');
         });
         $(document).click(function(){
             $('.navbar-nav li .clickD').removeClass('toggled');
             $('.toggled').removeClass('toggled');
             $('.sub-menu').removeClass('show');
         });
         $('.navbar-nav').click(function(e){
            e.stopPropagation();
         });
     }
 });
 // Navbar end


 
/* ===== For menu animation === */
$(".navbar-toggler").click(function(){
    $(".navbar-toggler").toggleClass("open");
    $(".navbar-toggler .stick").toggleClass("open");
    $('body,html' ).toggleClass("open-nav");
});

// Navbar end



// // fixed nav bar
// $(window).scroll(function() {     
//     var scroll = $(window).scrollTop();     
//     if (scroll > 200) { 
//         $(".main-head").addClass("fixed"); 
//     } 
//     else {
//       $(".main-head").removeClass("fixed"); 
//     }
// }) 


/*testimonial*/
$(".product-slider").slick({
  speed: 4000,
  autoplay: true,
  autoplaySpeed: 00,
  cssEase: 'linear',
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  centerMode: true,
  centerPadding: '250px',
  pauseOnHover: true,
  dots: false,
  navs: true,
  responsive: [
            {
                breakpoint: 1800,
                settings: {
                    centerPadding: '180px',
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    centerPadding: '150px',
                }
            },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            }
          }
         
          ]
});


/*testimonial end*/
  

$('.categori-wrap .categori-col').mouseenter(function(){
    $('.categori-wrap .categori-col').removeClass('active');
    $(this).addClass('active');
})




// document end

})



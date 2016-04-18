$(window).load(function(){
	$('body').removeClass('loaded');
});

//search-btn
$(document).click(function(event) {
  if($(event.target).closest(".search-field").length){
    return;
    console.log(1);
  }else if ($(event.target).is(".search-btn, .search-btn i")) {
    $(".search-field").toggleClass("search-field_open");
      console.log(2);
  } else if ($(".search-field").hasClass("search-field_open")) {
    $('.search-field').removeClass("search-field_open");
    console.log(3);
  }

});

$(document).ready(function(){

  // slider
  var owl = $('.slider');
  owl.owlCarousel({
  	items:1,
  	nav: true,
    loop: true,
  	mouseDrag: false,
  	touchDrag: false,
    dotsContainer: ".pag-container",
    dotsSpeed: 600,
    navSpeed: 600,
  	navText: ["",""]
  });

  var owl2 = $('.reviews-slider');
  owl2.owlCarousel({
    items:2,
    loop: true,
    nav: true,
    mouseDrag: false,
    touchDrag: false,
    navSpeed: 600,
    margin: 20,
    autoplay: true,
    autoplaySpeed: 800,
    navText: ["",""]
  });

  $('.owl-dot a').click(function(e){
      e.stopPropagation();
    });

    $('.owl-dot img').click(function(e){
      var cnt = $(this).closest(".owl-dot").next();
      var cntP = $(this).closest(".owl-dot").prev();
      var dot = $(this).closest(".owl-dot");
      if(cntP.hasClass("active") && dot.not(".active")){
        owl.trigger('next.owl.carousel');
        console.log(1);
      }else if(cnt.hasClass("active") && dot.not(".active")){
        owl.trigger('prev.owl.carousel');
      }
      e.stopPropagation();
      });

    // dragg img
    $("img, a").on("dragstart", function(event) {
      event.preventDefault();
    });

    //magnificPopup
    $(".popup").magnificPopup();

});

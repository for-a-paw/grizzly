
$(window).load(function(){
	$('body').removeClass('loaded');
});

//search-btn
$(document).click(function(event) {
  if($(event.target).closest(".search-field").length){
    return;
  }else if ($(event.target).is(".search-btn, .search-btn i")) {
    $(".search-field").toggleClass("search-field_open");
  } else if ($(".search-field").hasClass("search-field_open")) {
    $('.search-field').removeClass("search-field_open");
    console.log(3);
  }

});

//basket fadeOut product
$(".bs-product .close-btn").on("click", function(){
	$(this).parent().fadeOut(600);
});

//basket cnt
$('.number-minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
  });
  $('.number-plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
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

		//Общтй класс для всплывающих окон
    $(".popup").magnificPopup();

		//Класс для галлереи
		$('.popup-gallery').each(function() { // the containers for all your galleries
			$(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled:true
			}
		});
		});

		//Всплывающее окно "Лицензия активирована"
		$('.js-activate-popup').magnificPopup({
    items: [
      {
        src: '#lic-activate',
        type: 'inline'
      }
    ]
		});

		//Всплывающее окно "Спасибо за ваш заказ"
		$('.js-thanks-popup').magnificPopup({
		items: [
			{
				src: '#thanks-form',
				type: 'inline'
			}
		]
		});

		//Всплывающее окно "Спасибо за ваш заказ(Продление лицензии)"
		$('.js-thanks-popupProdlit').magnificPopup({
		items: [
			{
				src: '#thanks-form_prodlit',
				type: 'inline'
			}
		]
		});

	//formstyler
	 $('select,input[type="radio"]').styler();

	//sidebar menu toggle
	$(".sidebar-menu > li a").on("click", function(){
		$(this).next("ul").slideToggle();
	});

	//chosen-product(ВЫБОР ПРОДУКТА)
	$(".device-block-btn").on("click", function(){
		$(".device-block-btn").parent().removeClass("chosen-product");
		$(this).text("Выбран");
		$(this).parent().addClass("chosen-product");
	});

	$(".js-title-btn").on("click", function(){
		$(this).toggleClass("order-title_hide");
		$(this).parent().nextAll(".pur-item-body").fadeToggle(400);
	});

});

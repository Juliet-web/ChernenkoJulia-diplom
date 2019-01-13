$(function(){
	$('.slick').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  nextArrow: '.arrow_right',
	  prevArrow: '.arrow_left',
	  dots: true,
	  responsive: [
    	{
	      breakpoint: 992,
	      settings: {
	      	slidesToShow: 2,
	        slidesToScroll: 1,
	      }},
	    {
	      breakpoint: 768,
	      settings: {
	      	slidesToShow: 1,
	        slidesToScroll: 1,
	      }

	    }]

	});

	$(window).scroll(function(){
		if ($(window).scrollTop() > 1700) {
		    $('.flying-el-service').fadeIn(2800);
		}
	});

// окно обратной связи - кнопка "Заказать звонок"

	$('.popup-call-back-button').click(function(){
		$('.popup-callback').fadeIn(1500);
		$('.popup-callback-form').animate({
			width: '320px',
			height: '320px'
		}, 1500);
		$("body").addClass("fixed"); // включаем класс на body, отключаем скрол
	});

	$('.popup-callback').click(function(event){
		if(event.target == this){
			$(this).hide();
		}
		$("body").removeClass("fixed"); // выключаем класс на body, включаем скрол
	});

	// окно обратной связи - кнопка "Узнать больше, Узнать стоимость и Заказать проект"
	
	$('.popup-detail-button').click(function(){
		$('.popup-detail').fadeIn(1500);
		$('.popup-detail-form').animate({
			width: '320px',
			height: '420px'
		}, 1500);
		$("body").addClass("fixed"); // включаем класс на body, отключаем скрол
	});

	$('.popup-detail').click(function(event){
		if(event.target == this){
			$(this).hide();
		}
		$("body").removeClass("fixed"); // выключаем класс на body, включаем скрол
	});

// для мобильной версии сайта	
// по клику на значок меню появляется вертикальное меню
	$('.bars-icon')
		.click(function(){
			$('.popup-nav').fadeIn();
			$('.bars-icon').hide();
			$('.cross-icon').show();
		});

	$('.cross-icon')
		.click(function(){
			$('.popup-nav').fadeOut();
			$('.bars-icon').show();
			$('.cross-icon').hide();
		});
});

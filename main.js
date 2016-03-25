   var winHeight = $(window).height();

    $('.slide').css({
        height: winHeight,
        width: '100%'
 	});


//side navigation

 	$('.words1').css({opacity: '1'});
	$('.inner-circle1').css({opacity: '1'});
	$('.words2').css({opacity: '0'});
	$('.inner-circle2').css({opacity: '0'});
	$('.words3').css({opacity: '0'});
	$('.inner-circle3').css({opacity: '0'});
	$('.words4').css({opacity: '0'});
	$('.inner-circle4').css({opacity: '0'});

    $(window).scroll(function () {
    	if (window.scrollY < (winHeight / 2)) {
    		$('.words1').css({opacity: '1'});
    		$('.inner-circle1').css({opacity: '1'});
    		$('.words2').css({opacity: '0'});
    		$('.inner-circle2').css({opacity: '0'});
    		$('.words3').css({opacity: '0'});
    		$('.inner-circle3').css({opacity: '0'});
    		$('.words4').css({opacity: '0'});
    		$('.inner-circle4').css({opacity: '0'});
    		$('.words2').css({color: '#fff'});
    		$('.outer-circle').css({'border-color': '#fff'});
    		$('.inner-circle2').css({'background-color': '#fff'});
    	} else if (window.scrollY < ((winHeight * 2) - (winHeight / 2))) {
			$('.words1').css({opacity: '0'});
    		$('.inner-circle1').css({opacity: '0'});
    		$('.words2').css({opacity: '1'});
    		$('.inner-circle2').css({opacity: '1'});
    		$('.words3').css({opacity: '0'});
    		$('.inner-circle3').css({opacity: '0'});
    		$('.words4').css({opacity: '0'});
    		$('.inner-circle4').css({opacity: '0'});
    		$('.words2').css({color: '#44286D'});
    		$('.outer-circle').css({'border-color': '#44286D'});
    		$('.inner-circle2').css({'background-color': '#44286D'});
    	} else if (window.scrollY < ((winHeight * 3) - (winHeight / 2))) {
    		$('.words1').css({opacity: '0'});
    		$('.inner-circle1').css({opacity: '0'});
    		$('.words2').css({opacity: '0'});
    		$('.inner-circle2').css({opacity: '0'});
    		$('.words3').css({opacity: '1'});
    		$('.inner-circle3').css({opacity: '1'});
    		$('.words4').css({opacity: '0'});
    		$('.inner-circle4').css({opacity: '0'});
    		$('.words2').css({color: '#fff'});
    		$('.outer-circle').css({'border-color': '#fff'});
    		$('.inner-circle2').css({'background-color': '#fff'});
    	} else if (window.scrollY < ((winHeight * 4) - (winHeight / 2))) {
    		$('.words1').css({opacity: '0'});
    		$('.inner-circle1').css({opacity: '0'});
    		$('.words2').css({opacity: '0'});
    		$('.inner-circle2').css({opacity: '0'});
    		$('.words3').css({opacity: '0'});
    		$('.inner-circle3').css({opacity: '0'});
    		$('.words4').css({opacity: '1'});
    		$('.inner-circle4').css({opacity: '1'});
    		$('.words2').css({color: '#fff'});
    		$('.outer-circle').css({'border-color': '#fff'});
    		$('.inner-circle2').css({'background-color': '#fff'});
    	}
    });


//image blocks hover states

 $('imageblock').hover(function() {
      $(this).siblings().toggleClass('greyout');
 });



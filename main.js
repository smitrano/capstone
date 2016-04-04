   var $animation_elements = $('h2');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('fadeinup animated');
    } else {
      $element.removeClass('fadeinup animated');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');








   var winHeight = $(window).height();

    $('.slide').css({
        height: winHeight,
        width: '100%'
 	});


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


$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});








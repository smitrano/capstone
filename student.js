   var winHeight = $(window).height();


    $('.slide').css({
        height: winHeight,
        width: '100%'
    });


     $('.navbackground').css({
        height: winHeight,
    });

    $('.arrow').css({
        height: winHeight,
    });

    $('.words1').css({opacity: '1'});
    $('.inner-circle1').css({opacity: '1'});
    $('.words2').css({opacity: '0'});
    $('.inner-circle2').css({opacity: '0'});
    $('.words3').css({opacity: '0'});
    $('.inner-circle3').css({opacity: '0'});
    $('.words4').css({opacity: '0'});
    $('.inner-circle4').css({opacity: '0'});
    $('.words5').css({opacity: '0'});
    $('.inner-circle5').css({opacity: '0'});
    $('.words6').css({opacity: '0'});
    $('.inner-circle6').css({opacity: '0'});
    $('.words7').css({opacity: '0'});
    $('.inner-circle7').css({opacity: '0'});
    $('.signup').css({opacity: '0'});

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
            $('.words4').css({color: '#fff'});
            $('.words5').css({opacity: '0'});
            $('.inner-circle5').css({opacity: '0'});
            $('.words6').css({opacity: '0'});
            $('.inner-circle6').css({opacity: '0'});
            $('.words7').css({opacity: '0'});
            $('.inner-circle7').css({opacity: '0'});
            $('.outer-circle').css({'border-color': '#fff'});
            $('.inner-circle4').css({'background-color': '#fff'});

            $('.signup').css({opacity: '0'});


        } else if (window.scrollY < ((winHeight * 2) - (winHeight / 2))) {
            $('.words1').css({opacity: '0'});
            $('.inner-circle1').css({opacity: '0'});
            $('.words2').css({opacity: '1'});
            $('.inner-circle2').css({opacity: '1'});
            $('.words3').css({opacity: '0'});
            $('.inner-circle3').css({opacity: '0'});
            $('.words4').css({opacity: '0'});
            $('.inner-circle4').css({opacity: '0'});
            $('.words4').css({color: '#fff'});
            $('.words5').css({opacity: '0'});
            $('.inner-circle5').css({opacity: '0'});
            $('.words6').css({opacity: '0'});
            $('.inner-circle6').css({opacity: '0'});
            $('.words7').css({opacity: '0'});
            $('.inner-circle7').css({opacity: '0'});
            $('.outer-circle').css({'border-color': '#fff'});
            $('.inner-circle4').css({'background-color': '#fff'});

            $('.signup').css({opacity: '.5'});

        } else if (window.scrollY < ((winHeight * 3) - (winHeight / 2))) {
            $('.words1').css({opacity: '0'});
            $('.inner-circle1').css({opacity: '0'});
            $('.words2').css({opacity: '0'});
            $('.inner-circle2').css({opacity: '0'});
            $('.words3').css({opacity: '1'});
            $('.inner-circle3').css({opacity: '1'});
            $('.words4').css({opacity: '0'});
            $('.inner-circle4').css({opacity: '0'});
            $('.words4').css({color: '#fff'});
            $('.words5').css({opacity: '0'});
            $('.inner-circle5').css({opacity: '0'});
            $('.words6').css({opacity: '0'});
            $('.inner-circle6').css({opacity: '0'});
            $('.words7').css({opacity: '0'});
            $('.inner-circle7').css({opacity: '0'});
            $('.outer-circle').css({'border-color': '#fff'});
            $('.inner-circle4').css({'background-color': '#fff'});

            $('.signup').css({opacity: '.5'});

        } else if (window.scrollY < ((winHeight * 4) - (winHeight / 2))) {
            $('.words1').css({opacity: '0'});
            $('.inner-circle1').css({opacity: '0'});
            $('.words2').css({opacity: '0'});
            $('.inner-circle2').css({opacity: '0'});
            $('.words3').css({opacity: '0'});
            $('.inner-circle3').css({opacity: '0'});
            $('.words4').css({opacity: '1'});
            $('.inner-circle4').css({opacity: '1'});
            $('.words4').css({color: '#44286D'});
            $('.words5').css({opacity: '0'});
            $('.words6').css({opacity: '0'});
            $('.inner-circle6').css({opacity: '0'});
            $('.inner-circle5').css({opacity: '0'});
            $('.words7').css({opacity: '0'});
            $('.inner-circle7').css({opacity: '0'});
            $('.outer-circle').css({'border-color': '#44286D'});
            $('.inner-circle4').css({'background-color': '#44286D'});

            $('.signup').css({opacity: '.5'});

        } else if (window.scrollY < ((winHeight * 5) - (winHeight / 2))) {
            $('.words1').css({opacity: '0'});
            $('.inner-circle1').css({opacity: '0'});
            $('.words2').css({opacity: '0'});
            $('.inner-circle2').css({opacity: '0'});
            $('.words3').css({opacity: '0'});
            $('.inner-circle3').css({opacity: '0'});
            $('.words4').css({opacity: '0'});
            $('.inner-circle4').css({opacity: '0'});
            $('.words5').css({opacity: '1'});
            $('.inner-circle5').css({opacity: '1'});
            $('.words6').css({opacity: '0'});
            $('.inner-circle6').css({opacity: '0'});
            $('.words7').css({opacity: '0'});
            $('.inner-circle7').css({opacity: '0'});
            $('.words5').css({color: '#44286D'});
            $('.outer-circle').css({'border-color': '#44286D'});
            $('.inner-circle5').css({'background-color': '#44286D'});

            $('.signup').css({opacity: '.5'});

        } else if (window.scrollY < ((winHeight * 6) - (winHeight / 2))) {
            $('.words1').css({opacity: '0'});
            $('.inner-circle1').css({opacity: '0'});
            $('.words2').css({opacity: '0'});
            $('.inner-circle2').css({opacity: '0'});
            $('.words3').css({opacity: '0'});
            $('.inner-circle3').css({opacity: '0'});
            $('.words4').css({opacity: '0'});
            $('.inner-circle4').css({opacity: '0'});
            $('.words5').css({opacity: '0'});
            $('.inner-circle5').css({opacity: '0'});
            $('.words6').css({opacity: '1'});
            $('.inner-circle6').css({opacity: '1'});
            $('.words7').css({opacity: '0'});
            $('.inner-circle7').css({opacity: '0'});
            $('.words6').css({color: '#fff'});
            $('.outer-circle').css({'border-color': '#fff'});
            $('.inner-circle6').css({'background-color': '#fff'});

            $('.signup').css({opacity: '.5'});

        } else if (window.scrollY < ((winHeight * 7) - (winHeight / 2))) {
            $('.words1').css({opacity: '0'});
            $('.inner-circle1').css({opacity: '0'});
            $('.words2').css({opacity: '0'});
            $('.inner-circle2').css({opacity: '0'});
            $('.words3').css({opacity: '0'});
            $('.inner-circle3').css({opacity: '0'});
            $('.words4').css({opacity: '0'});
            $('.inner-circle4').css({opacity: '0'});
            $('.words5').css({opacity: '0'});
            $('.inner-circle5').css({opacity: '0'});
            $('.words6').css({opacity: '0'});
            $('.inner-circle6').css({opacity: '0'});
            $('.words7').css({opacity: '1'});
            $('.inner-circle7').css({opacity: '1'});
            $('.words4').css({color: '#fff'});
            $('.outer-circle').css({'border-color': '#fff'});
            $('.inner-circle4').css({'background-color': '#fff'});

            $('.signup').css({opacity: '.5'});
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



    $(window).on('click', function (e) {
        if (e.pageX < ($(window).width() / 4)) {
            $('.special-friend').animate({marginLeft: "+=500px"});
        } else if (e.pageX > ($(window).width() - ($(window).width() / 4))) {
            $('.special-friend').animate({marginLeft: "-=500px"});
        }
    });

    $('panleft').on('click', function (e) {
        $('.special-friend').animate({marginLeft: "-=500px"});
    });

    $('panright').on('click', function (e) {
        $('.special-friend').animate({marginLeft: "=500px"});
    });











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






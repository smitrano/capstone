$(document).ready(function() {

    $('.words1').css({opacity: '1'});
    $('.inner-circle1').css({opacity: '1'});
    $('.words2').css({opacity: '0'});
    $('.inner-circle2').css({opacity: '0'});
    $('.words3').css({opacity: '0'});
    $('.inner-circle3').css({opacity: '0'});
    $('.words4').css({opacity: '0'});
    $('.inner-circle4').css({opacity: '0'});

    $('#fullpage').fullpage({
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
        touchSensitivity: 20,
        onLeave: function(index, nextIndex, direction){
            if (nextIndex === 1){
                $('.words1').css({opacity: '1'});
                $('.inner-circle1').css({opacity: '1'});
                $('.words2').css({opacity: '0'});
                $('.inner-circle2').css({opacity: '0'});
                $('.words3').css({opacity: '0'});
                $('.inner-circle3').css({opacity: '0'});
                $('.words4').css({opacity: '0'});
                $('.inner-circle4').css({opacity: '0'});
                $('.words1').css({color: '#fff'});
                $('.outer-circle').css({'border-color': '#fff'});
                $('.inner-circle1').css({'background-color': '#fff'});

            } else if (nextIndex === 2){
                $('.block1').css({opacity: 0}).delay(400).animate({opacity: 1}, 400);
                $('.block2').css({opacity: 0}).delay(600).animate({opacity: 1}, 400);
                $('.block3').css({opacity: 0}).delay(800).animate({opacity: 1}, 400);
                $('.block4').css({opacity: 0}).delay(1000).animate({opacity: 1}, 400);
                $('.lefthalf').css({opacity: 0}).delay(400).animate({opacity: 1}, 400);
                $('.explore').css({opacity: 0}).delay(800).animate({opacity: 1}, 400);
                $('.text').css({opacity: 0}).delay(600).animate({opacity: 1}, 400);
                $('.downarrow').css({opacity: 0}).delay(1000).animate({opacity: 1}, 800);

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


            } else if (nextIndex === 3){
                $('.righthalf').css({opacity: 0}).delay(400).animate({opacity: 1}, 400);
                $('.lefthalf').css({opacity: 0}).delay(600).animate({opacity: 1}, 400);
                $('.downarrow').css({opacity: 0}).delay(1000).animate({opacity: 1}, 400);
                $('.casestudies').css({opacity: 0}).delay(600).animate({opacity: 1}, 200);

                $('.words1').css({opacity: '0'});
                $('.inner-circle1').css({opacity: '0'});
                $('.words2').css({opacity: '0'});
                $('.inner-circle2').css({opacity: '0'});
                $('.words3').css({opacity: '1'});
                $('.inner-circle3').css({opacity: '1'});
                $('.words4').css({opacity: '0'});
                $('.inner-circle4').css({opacity: '0'});
                $('.words3').css({color: '#44286D'});
                $('.outer-circle').css({'border-color': '#44286D'});
                $('.inner-circle3').css({'background-color': '#44286D'});

            }else if (nextIndex === 4){
                $('.lefthalf').css({opacity: 0}).delay(400).animate({opacity: 1}, 400);
                $('.righthalf').css({opacity: 0}).delay(600).animate({opacity: 1}, 400);
                $('.downarrow').css({opacity: 0}).delay(1000).animate({opacity: 1}, 800);

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


        }

    });


    $('#hamburger').on('click', function () {
        if ($('#hamburger').hasClass('menuclicked')) {
           $('#menu').css("right", "-30%");
           $('#hamburger').removeClass('menuclicked');

        } else {
            $('#menu').css("right", "0");
            $('#hamburger').addClass('menuclicked');
        }
    });   


    $('.explore').on('click', function () {
            $('.colorblock_overlay').css("opacity", "0");
            $('.explore').css("visibility", "hidden");    
    });


    $('.clickblock1').on('click', function () {
        if ($('.holder').hasClass('block1clicked')) {

        } else {
            $('.holder').html($('#template1').clone());
            $('.holder').addClass('block1clicked');
            $('.holder').removeClass('block2clicked block3clicked block4clicked');
        }
    });

    $('.howclose').on('click', function () {
            $('.holder').html($('#template0').clone());
    });


    $('.block1').on('click', function () {
        if ($('.holder').hasClass('block1clicked')) {

        } else {
            $('.holder').html($('#template1').clone());
            $('.holder').addClass('block1clicked');
            $('.holder').removeClass('block2clicked block3clicked block4clicked');
        }
    });

    $('.block2').on('click', function () {
        if ($('.holder').hasClass('block2clicked')) {

        } else {
            $('.holder').html($('#template2').clone());
            $('.holder').addClass('block2clicked');
            $('.holder').removeClass('block1clicked block3clicked block4clicked');
        }
    });
    $('.block3').on('click', function () {
        if ($('.holder').hasClass('block3clicked')) {

        } else {
            $('.holder').html($('#template3').clone());
            $('.holder').addClass('block3clicked');
            $('.holder').removeClass('block2clicked block1clicked block4clicked');
        }
    });
    $('.block4').on('click', function () {
        if ($('.holder').hasClass('block4clicked')) {

        } else {
            $('.holder').html($('#template4').clone());
            $('.holder').addClass('block4clicked');
            $('.holder').removeClass('block2clicked block3clicked block1clicked');
        }
    });




    $('.name').on('click', function () {
        $('.casestudies').css("width", "100%");
        $('#home_2 .lefthalf').css("opacity", "0");
        $('.name').addClass('nameexpanded');
        $('.nameexpanded').removeClass('name');
        $('.casestudiesexpanded').css("top", "0");
        $('.casestudiesexpanded').css("opacity", "1");
    });

    $('.close').on('click', function () {
        $('#home_2 .lefthalf').css("opacity", "1");
        $('.nameexpanded').addClass('name');
        $('.name').removeClass('nameexpanded');
        $('.casestudiesexpanded').css("top", "100%");
        $('.casestudiesexpanded').css("opacity", "0");
        $('.casestudies').css("width", "50%");
    });

    $('.photo1').on('click', function () {
        if ($('.photo1').hasClass('photo1clicked')) {
            $('.textarea1').css("width", "0%");
            $('.photo2').css("width", "25%");
            $('.photo3').css("width", "25%");
            $('.photo4').css("width", "25%");
            $('.showtext').css("display", "none");
            $('.photo1').removeClass('photo1clicked');
        } else {
            $('.textarea1').css("width", "39%");
            $('.photo2').css("width", "12%");
            $('.photo3').css("width", "12%");
            $('.photo4').css("width", "12%");
            setTimeout(function() { 
                $('.showtext').css("display", "inline");
            }, 400);
            $('.photo1').addClass('photo1clicked');
        }
    });


    $('.name1').on('mouseenter', function () {
        $('#home_2 .lefthalf').css({"background-image": "url(assets/photos/company_patagonia.jpg)"});
    });

    $('.name2').on('mouseenter', function () {
        $('#home_2 .lefthalf').css({"background-image": "url(assets/photos/company_warbyparker.jpg)"});
    });

    $('.name3').on('mouseenter', function () {
        $('#home_2 .lefthalf').css({"background-image": "url(assets/photos/company_etsy.jpg)"});
    });

    $('.name4').on('mouseenter', function () {
        $('#home_2 .lefthalf').css({"background-image": "url(assets/photos/company_method.jpg)"});
    });




    $('.rightarrow').on('click', function () {
        $('.special-friend').animate({marginLeft: "-=500px"});
    });

    $('.leftarrow').on('click', function () {
        $('.special-friend').animate({marginLeft: "+=500px"});
    });




//        $('.all-click').on('click', function () {
//        $('.hover-thingys').addClass();
//       $('.backgrounds').animate({height: $(window).height()}, 800);
//    });

});


// $('.block1').on('click', function () {
//      $('.holder').css({
//         'background-color': 'red'

//     });
// });






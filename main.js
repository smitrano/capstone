$(document).ready(function() {

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

    if ($('body').hasClass('index') ) {
        $('#hamnav').attr('src','assets/hamburger_white.png');
        $('#logonav').attr('src','assets/logo_white.png');

    }

    if ($('body').hasClass('startups') ) {
        $('#hamnav').attr('src','assets/hamburger_white.png');
        $('#logonav').attr('src','assets/logo_white.png');

    }

    if ($('body').hasClass('students') ) {
        $('#hamnav').attr('src','assets/hamburger_white.png');
        $('#logonav').attr('src','assets/logo_white.png');

    }

    $('#fullpage').fullpage({
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
        touchSensitivity: 20,
        normalScrollElements: '.showtext',
        onLeave: function(index, nextIndex, direction){
            if (nextIndex === 1){
                $('.colorblock').css({opacity: 0});
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

                if ($('body').hasClass('index') ) {
                    $('#hamnav').attr('src','assets/hamburger_white.png');
                    $('#logonav').attr('src','assets/logo_white.png');

                }

                if ($('body').hasClass('startups') ) {
                    $('#hamnav').attr('src','assets/hamburger_white.png');
                    $('#logonav').attr('src','assets/logo_white.png');

                }

                if ($('body').hasClass('students') ) {
                    $('#hamnav').attr('src','assets/hamburger_white.png');
                    $('#logonav').attr('src','assets/logo_white.png');

                }

            } else if (nextIndex === 2){
                $('.block1').css({opacity: 0}).delay(400).animate({opacity: 1}, 400);
                $('.block2').css({opacity: 0}).delay(600).animate({opacity: 1}, 400);
                $('.block3').css({opacity: 0}).delay(800).animate({opacity: 1}, 400);
                $('.block4').css({opacity: 0}).delay(1000).animate({opacity: 1}, 400);
                $('.lefthalf').css({opacity: 0}).delay(400).animate({opacity: 1}, 400);
                $('.explore').css({opacity: 0}).delay(1200).animate({opacity: 1}, 600);
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
                $('.words5').css({opacity: '0'});
                $('.inner-circle5').css({opacity: '0'});
                $('.words6').css({opacity: '0'});
                $('.inner-circle6').css({opacity: '0'});
                $('.words7').css({opacity: '0'});
                $('.inner-circle7').css({opacity: '0'});  

                if ($('body').hasClass('index') ) {
                    $('#hamnav').attr('src','assets/hamburger_white.png');
                    $('#logonav').attr('src','assets/logo_purple.png');

                }

                if ($('body').hasClass('startups') ) {
                    $('#hamnav').attr('src','assets/hamburger_purple.png');
                    $('#logonav').attr('src','assets/logo_purple.png');

                }

                if ($('body').hasClass('students') ) {
                    $('#hamnav').attr('src','assets/hamburger_purple.png');
                    $('#logonav').attr('src','assets/logo_purple.png');

                }

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
                $('.words5').css({opacity: '0'});
                $('.inner-circle5').css({opacity: '0'});
                $('.words6').css({opacity: '0'});
                $('.inner-circle6').css({opacity: '0'});
                $('.words7').css({opacity: '0'});
                $('.inner-circle7').css({opacity: '0'});  

                if ($('body').hasClass('index') ) {
                    $('#hamnav').attr('src','assets/hamburger_purple.png');
                    $('#logonav').attr('src','assets/logo_white.png');

                }

                if ($('body').hasClass('startups') ) {
                    $('#hamnav').attr('src','assets/hamburger_white.png');
                    $('#logonav').attr('src','assets/logo_white.png');

                }

                if ($('body').hasClass('students') ) {
                    $('#hamnav').attr('src','assets/hamburger_white.png');
                    $('#logonav').attr('src','assets/logo_white.png');

                }

            }else if (nextIndex === 4){
                $('.lefthalf').css({opacity: 0}).delay(400).animate({opacity: 1}, 400);
                $('.righthalf').css({opacity: 0}).delay(600).animate({opacity: 1}, 400);
                $('.downarrow').css({opacity: 0}).delay(1000).animate({opacity: 1}, 800);
                $('.casestudies').css({opacity: 0}).delay(1000).animate({opacity: 1}, 800);

                $('.words1').css({opacity: '0'});
                $('.inner-circle1').css({opacity: '0'});
                $('.words2').css({opacity: '0'});
                $('.inner-circle2').css({opacity: '0'});
                $('.words3').css({opacity: '0'});
                $('.inner-circle3').css({opacity: '0'});
                $('.words4').css({opacity: '1'});
                $('.inner-circle4').css({opacity: '1'});
                $('.words5').css({opacity: '0'});
                $('.inner-circle5').css({opacity: '0'});
                $('.words6').css({opacity: '0'});
                $('.inner-circle6').css({opacity: '0'});
                $('.words7').css({opacity: '0'});
                $('.inner-circle7').css({opacity: '0'});  

                if ($('body').hasClass('index') ) {
                    $('#hamnav').attr('src','assets/hamburger_white.png');
                    $('#logonav').attr('src','assets/logo_white.png');

                }

                if ($('body').hasClass('startups') ) {
                    $('#hamnav').attr('src','assets/hamburger_white.png');
                    $('#logonav').attr('src','assets/logo_white.png');

                }

                if ($('body').hasClass('students') ) {
                    $('#hamnav').attr('src','assets/hamburger_purple.png');
                    $('#logonav').attr('src','assets/logo_purple.png');

                }

            }else if (nextIndex === 5){
                $('.lefthalf').css({opacity: 0}).delay(400).animate({opacity: 1}, 400);
                $('.righthalf').css({opacity: 0}).delay(600).animate({opacity: 1}, 400);
                $('.downarrow').css({opacity: 0}).delay(1000).animate({opacity: 1}, 800);
                $('.casestudies').css({opacity: 0}).delay(1000).animate({opacity: 1}, 800);

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

                if ($('body').hasClass('startups') ) {
                    $('#hamnav').attr('src','assets/hamburger_white.png');
                    $('#logonav').attr('src','assets/logo_white.png');

                }

                if ($('body').hasClass('students') ) {
                    $('#hamnav').attr('src','assets/hamburger_purple.png');
                    $('#logonav').attr('src','assets/logo_purple.png');

                }

                }else if (nextIndex === 6){
                $('.lefthalf').css({opacity: 0}).delay(400).animate({opacity: 1}, 400);
                $('.righthalf').css({opacity: 0}).delay(600).animate({opacity: 1}, 400);
                $('.downarrow').css({opacity: 0}).delay(1000).animate({opacity: 1}, 800);
                $('.casestudies').css({opacity: 0}).delay(1000).animate({opacity: 1}, 800);

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

                if ($('body').hasClass('startups') ) {
                    $('#hamnav').attr('src','assets/hamburger_white.png');
                    $('#logonav').attr('src','assets/logo_white.png');

                }

                if ($('body').hasClass('students') ) {
                    $('#hamnav').attr('src','assets/hamburger_white.png');
                    $('#logonav').attr('src','assets/logo_white.png');

                }

                }else if (nextIndex === 7){
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

                if ($('body').hasClass('startups') ) {
                    $('#hamnav').attr('src','assets/hamburger_white.png');
                    $('#logonav').attr('src','assets/logo_white.png');

                }

                if ($('body').hasClass('students') ) {
                    $('#hamnav').attr('src','assets/hamburger_white.png');
                    $('#logonav').attr('src','assets/logo_white.png');

                }

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

     $('#menu a').on('click', function () {
        if ($('#hamburger').hasClass('menuclicked')) {
           $('#menu').css("right", "-30%");
           $('#hamburger').removeClass('menuclicked');

        }
    });   





////////// COLOR BLOCKS ////////////




$('.explore').on('click', function () {
    $('.explore').css("visibility", "hidden");   
    $('.colorblock').addClass('activated'); 

    $('.righthalf').on('mouseenter', function () {
        $('.righthalf').addClass('righthalfhover');
    });

    $('.righthalf').on('mouseover', function () {
        $('.righthalf').addClass('righthalfhover');
    });

    $('.righthalf').on('mouseleave', function () {
        $('.righthalf').removeClass('righthalfhover');

    }); 


    if ($('.colorblock').hasClass('activated')) {
        $('.colorblock').on('click', setBlock);

    }

    function setBlock () {
        var selectedBlock = $(this);
        $('.colorblock').removeClass('selected');
        selectedBlock.addClass('selected');
        $('.righthalf').addClass('blockselected');
        $('.lefthalf').css({opacity: 0}).animate({opacity: 1}, 400);

        if (selectedBlock.hasClass('block1')) {
            $('.holder').html($('#template1').clone());
        }

        if (selectedBlock.hasClass('block2')) {
            $('.holder').html($('#template2').clone());
        }

        if (selectedBlock.hasClass('block3')) {
            $('.holder').html($('#template3').clone());
        }

        if (selectedBlock.hasClass('block4')) {
            $('.holder').html($('#template4').clone());
        }

        $('.howclose').css("visibility", "visible");
    }


    $('.howclose').on('click', function () {
            $('.holder').html($('#template0').clone());
            $('.howclose').css("visibility", "hidden");
            $('.righthalf').removeClass('blockselected');
            $('.colorblock').removeClass('selected');

    });


});


    $('.name').on('click', function () {
        $('.casestudies').css("width", "100%");
        $('#home_2 .lefthalf').css("opacity", "0");
        $('.name').css("visibility", "hidden");
        $('.casestudiesexpanded').css("top", "0");
        $('.casestudiesexpanded').css("opacity", "1");
    });

    $('.close').on('click', function () {
        $('.casestudies').css("width", "50%");
        $('#home_2 .lefthalf').css("opacity", "1");
        $('.name').css("visibility", "visible");
        $('.casestudiesexpanded').css("top", "100%");
        $('.casestudiesexpanded').css("opacity", "0");
    });





    $('.photo1').on('click', function () {
        if ($('.photo1').hasClass('photo1clicked')) {
            $('.textarea1').css("width", "0%");
            $('.photo1').css("width", "25%");
            $('.photo2').css("width", "25%");
            $('.photo3').css("width", "25%");
            $('.photo4').css("width", "25%");
            $('.showtext1').css("display", "none");
            $('.photo1').removeClass('photo1clicked');
        } else {

            if (!$('.photo2').hasClass('photo2clicked') 
            && !$('.photo3').hasClass('photo3clicked') 
            && !$('.photo4').hasClass('photo4clicked')) {

                $('.textarea1').css("width", "39%");
                $('.photo2').css("width", "12%");
                $('.photo3').css("width", "12%");
                $('.photo4').css("width", "12%");
                setTimeout(function() { 
                    $('.showtext1').css("display", "inline");
                }, 400);
                $('.photo1').addClass('photo1clicked');
            }
        }
    });

    $('.photo2').on('click', function () {
        if ($('.photo2').hasClass('photo2clicked')) {
            $('.textarea2').css("width", "0%");
            $('.photo1').css("width", "25%");
            $('.photo2').css("width", "25%");
            $('.photo3').css("width", "25%");
            $('.photo4').css("width", "25%");
            $('.showtext2').css("display", "none");
            $('.photo2').removeClass('photo2clicked');
        } else {

            if (!$('.photo1').hasClass('photo1clicked') 
            && !$('.photo3').hasClass('photo3clicked') 
            && !$('.photo4').hasClass('photo4clicked')) {

                $('.textarea2').css("width", "39%");
                $('.photo1').css("width", "12%");
                $('.photo3').css("width", "12%");
                $('.photo4').css("width", "12%");
                setTimeout(function() { 
                    $('.showtext2').css("display", "inline");
                }, 400);
                $('.photo2').addClass('photo2clicked');
            }
        }
    });

    $('.photo3').on('click', function () {
        if ($('.photo3').hasClass('photo3clicked')) {
            $('.textarea3').css("width", "0%");
            $('.photo1').css("width", "25%");
            $('.photo2').css("width", "25%");
            $('.photo3').css("width", "25%");
            $('.photo4').css("width", "25%");
            $('.showtext3').css("display", "none");
            $('.photo3').removeClass('photo3clicked');
        } else {

            if (!$('.photo1').hasClass('photo1clicked') 
            && !$('.photo2').hasClass('photo3clicked') 
            && !$('.photo4').hasClass('photo4clicked')) {

                $('.textarea3').css("width", "39%");
                $('.photo1').css("width", "12%");
                $('.photo2').css("width", "12%");
                $('.photo4').css("width", "12%");
                setTimeout(function() { 
                    $('.showtext3').css("display", "inline");
                }, 400);
                $('.photo3').addClass('photo3clicked');
            }
        }
    });

    $('.photo4').on('click', function () {
        if ($('.photo4').hasClass('photo4clicked')) {
            $('.textarea4').css("width", "0%");
            $('.photo1').css("width", "25%");
            $('.photo2').css("width", "25%");
            $('.photo3').css("width", "25%");
            $('.photo4').css("width", "25%");
            $('.showtext4').css("display", "none");
            $('.photo4').removeClass('photo4clicked');
        } else {

            if (!$('.photo1').hasClass('photo1clicked') 
            && !$('.photo2').hasClass('photo3clicked') 
            && !$('.photo3').hasClass('photo4clicked')) {

                $('.textarea4').css("width", "39%");
                $('.photo1').css("width", "12%");
                $('.photo2').css("width", "12%");
                $('.photo3').css("width", "12%");
                setTimeout(function() { 
                    $('.showtext4').css("display", "inline");
                }, 400);
                $('.photo4').addClass('photo4clicked');
            }
        }
    });


    $('.name1').hover(function () {
        $('#home_2 .lefthalf').css({"background-image": "url(assets/photos/company_patagonia.jpg)"});
    });

    $('.name2').hover(function () {
        $('#home_2 .lefthalf').css({"background-image": "url(assets/photos/company_warbyparker.jpg)"});
    });

    $('.name3').hover(function () {
        $('#home_2 .lefthalf').css({"background-image": "url(assets/photos/company_etsy.jpg)"});
    });

    $('.name4').hover(function () {
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






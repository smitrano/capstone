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
                $('.explore').css({opacity: 0}).delay(1500).animate({opacity: 1}, 600);
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





//////////BLOCK CLICKS////////////

    $('.clickblock1').on('click', function () {
        if ($('.holder').hasClass('block1clicked')) {

        } else {
            $('.holder').html($('#template1').clone());
            $('.holder').addClass('block1clicked');
            $('.holder').removeClass('block2clicked block3clicked block4clicked');
            $('.colorblock_overlay').css("opacity", "0");
            $('.explore').css("visibility", "hidden");   
            $('.colorblock').addClass('activated'); 

        }

    });


    $('.howclose').on('click', function () {
            $('.holder').html($('#template0').clone());
            $('.howclose').css("visibility", "hidden");

    });



$('.explore').on('click', function () {
    $('.colorblock_overlay').css("opacity", "0");
    $('.explore').css("visibility", "hidden");   
    $('.colorblock').addClass('activated'); 

    if($('.colorblock').hasClass('activated')) {



            $('.block1').on('click', function () {
                if ($('.holder').hasClass('block1clicked') ) {

                } else {
                    $('.holder').html($('#template1').clone());
                    $('.howclose').css("visibility", "visible");
                    $('.holder').addClass('block1clicked');
                    $('.holder').removeClass('block2clicked block3clicked block4clicked');
                    $('.block2').css("opacity", ".2");
                    $('.block3').css("opacity", ".2");
                    $('.block4').css("opacity", ".2");
                    $('.block1').css("background-color", "#241539");
                }


            });

        
            $('.block1').on('mouseenter', function () {
                if(!$('.holder').hasClass('block1clicked,')) {
                    $('.block1').css("opacity", "1");
                    $('.block2').css("opacity", ".2");
                    $('.block3').css("opacity", ".2");
                    $('.block4').css("opacity", ".2");
                }
            });

        
            $('.block1').on('mouseleave', function () {
                if(!$('.holder').hasClass('block1clicked')) {
                    $('.block1').css("opacity", "1");
                    $('.block2').css("opacity", "1");
                    $('.block3').css("opacity", "1");
                    $('.block4').css("opacity", "1");
                }
            });


            $('.block2').on('click', function () {
                if ($('.holder').hasClass('block2clicked')) {

                } else {
                    $('.holder').html($('#template2').clone());
                    $('.howclose').css("visibility", "visible");
                    $('.holder').addClass('block2clicked');
                    $('.holder').removeClass('block1clicked block3clicked block4clicked');
                    $('.block1').css("opacity", ".2");
                    $('.block3').css("opacity", ".2");
                    $('.block4').css("opacity", ".2");
                    $('.block2').css("background-color", "#B99B30");
                }
            });

            $('.block2').on('mouseenter', function () {
                if(!$('.holder').hasClass('block2clicked')) {
                    $('.block1').css("opacity", ".2");
                    $('.block2').css("opacity", "1");
                    $('.block3').css("opacity", ".2");
                    $('.block4').css("opacity", ".2");
                }
            });

            $('.block2').on('mouseleave', function () {
                if(!$('.holder').hasClass('block2clicked')) {
                    $('.block1').css("opacity", "1");
                    $('.block2').css("opacity", "1");
                    $('.block3').css("opacity", "1");
                    $('.block4').css("opacity", "1");
                }
            });


            $('.block3').on('click', function () {
                if ($('.holder').hasClass('block3clicked')) {

                } else {
                    $('.holder').html($('#template3').clone());
                    $('.howclose').css("visibility", "visible");
                    $('.holder').addClass('block3clicked');
                    $('.holder').removeClass('block2clicked block1clicked block4clicked');
                    $('.block1').css("opacity", ".2");
                    $('.block2').css("opacity", ".2");
                    $('.block4').css("opacity", ".2");
                    $('.block3').css("background-color", "#1C5A41");
                }
            });

            $('.block3').on('mouseenter', function () {
                    $('.block1').css("opacity", ".2");
                    $('.block2').css("opacity", ".2");
                    $('.block3').css("opacity", "1");
                    $('.block4').css("opacity", ".2");
            });

            $('.block3').on('mouseleave', function () {
                    $('.block1').css("opacity", "1");
                    $('.block2').css("opacity", "1");
                    $('.block3').css("opacity", "1");
                    $('.block4').css("opacity", "1");
            });


            $('.block4').on('click', function () {
                if ($('.holder').hasClass('block4clicked')) {

                } else {
                    $('.holder').html($('#template4').clone());
                    $('.howclose').css("visibility", "visible");
                    $('.holder').addClass('block4clicked');
                    $('.holder').removeClass('block2clicked block3clicked block1clicked');
                    $('.block1').css("opacity", ".2");
                    $('.block2').css("opacity", ".2");
                    $('.block3').css("opacity", ".2");
                    $('.block4').css("background-color", "#B83B29");
                }
            });

            $('.block4').on('mouseenter', function () {
                    $('.block1').css("opacity", ".2");
                    $('.block2').css("opacity", ".2");
                    $('.block3').css("opacity", ".2");
                    $('.block4').css("opacity", "1");
            });

            $('.block4').on('mouseleave', function () {
                    $('.block1').css("opacity", "1");
                    $('.block2').css("opacity", "1");
                    $('.block3').css("opacity", "1");
                    $('.block4').css("opacity", "1");
            });

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






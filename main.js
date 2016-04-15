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

//side nav color switcher //

    if ($('body').hasClass('index') ) {
        $('#hamnav').attr('src','assets/hamburger_white.png');
        $('#logonav').attr('src','assets/logo_white.png');

    }

// menu color switcher //

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

    $('.steps .item img').addClass('up_onload');

    $('#fullpage').fullpage({
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
        scrollingSpeed: 1000,
        touchSensitivity: 15,
        normalScrollElements: '.casetext',
        afterLoad: function (index) {
            currentIndex = index;
            $('.up_onload').css({'visibility':'visible'});
            $('.up_onload').addClass('animated fadeInUp');
        },
        onLeave: function(index, nextIndex, direction){
                $('.up_onload').css({'visibility':'hidden'});
                $('.up_onload').removeClass('animated fadeInUp');

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
                $('.block1').css({opacity: 0}).delay(400).animate({opacity: 1}, 400);
                $('.block2').css({opacity: 0}).delay(600).animate({opacity: 1}, 400);
                $('.block3').css({opacity: 0}).delay(800).animate({opacity: 1}, 400);
                $('.block4').css({opacity: 0}).delay(1000).animate({opacity: 1}, 400);
                $('.explore_casestudies').css({opacity: 0}).delay(1200).animate({opacity: 1}, 600);
                $('.righthalf').animate({opacity: 0}, 400).delay(400).animate({opacity: 1}, 400);
                $('.lefthalf').animate({opacity: 0}, 400).delay(600).animate({opacity: 1}, 400);
                $('.casestudies').animate({opacity: 0}, 400).delay(600).animate({opacity: 1}, 200);

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

////////// select STARTUP or STUDENT ////////////


     // $('#selectstartup a').on('mouseenter', function () {
     //    $('.fp-viewing-fourthPage').addClass('red');
     // });

     // $('#selectstartup a').on('mouseleave', function () {
     //    $('.fp-viewing-fourthPage').removeClass('red');
     // });

     // $('#selectstudent a').on('mouseenter', function () {
     //    $('.fp-viewing-fourthPage').addClass('darkyellow');
     // });

     // $('#selectstudent a').on('mouseleave', function () {
     //    $('.fp-viewing-fourthPage').removeClass('darkyellow');
     // });

////////// COLOR BLOCKS ////////////



$('.explore').on('click', function () {
    $('.explore').css("visibility", "hidden");   
    $('.colorblock').addClass('activated'); 
    $('#to_casestudies').css("visibility", "visible");

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



    function setBlock (flagBlock) {

        var selectedBlock = $(this);

        if (flagBlock && !flagBlock.timeStamp) {
            selectedBlock = $(flagBlock);
        }

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

    setBlock(document.getElementsByClassName('block1')[0]);


});



////////// CASE STUDIES ////////////


$('.explore_casestudies').on('click', function () {
    $('.explore_casestudies').css("visibility", "hidden");   
    $('.companyblock').addClass('activated'); 

    $('.lefthalf').on('mouseenter', function () {
        $('.lefthalf').addClass('lefthalfhover');
    });

    $('.lefthalf').on('mouseover', function () {
        $('.lefthalf').addClass('lefthalfhover');
    });

    $('.lefthalf').on('mouseleave', function () {
        $('.lefthalf').removeClass('lefthalfhover');

    }); 


    if ($('.companyblock').hasClass('activated')) {
        $('.companyblock').on('click', setCompanyBlock);

    }



    function setCompanyBlock (flagBlock) {

        var selectedBlock = $(this);

        if (flagBlock && !flagBlock.timeStamp) {
            selectedBlock = $(flagBlock);
        }

        $('.companyblock').removeClass('selected');
        selectedBlock.addClass('selected');
        $('.lefthalf').addClass('blockselected');
        $('.righthalf').css({opacity: 0}).animate({opacity: 1}, 400);

        if (selectedBlock.hasClass('block1')) {
            $('.holder_company').html($('#template6').clone());
        }

        if (selectedBlock.hasClass('block2')) {
            $('.holder_company').html($('#template7').clone());
        }

        if (selectedBlock.hasClass('block3')) {
            $('.holder_company').html($('#template8').clone());
        }

        if (selectedBlock.hasClass('block4')) {
            $('.holder_company').html($('#template9').clone());
        }

        $('.howclose_company').css("visibility", "visible");
    }


    $('.howclose_company').on('click', function () {
            $('.holder_company').html($('#template5').clone());
            $('.howclose_company').css("visibility", "hidden");
            $('.lefthalf').removeClass('blockselected');
            $('.companyblock').removeClass('selected');
            // $('.companyblock').removeClass('activated');
            // $('.explore_casestudies').css("visibility", "visible");

    });

    setCompanyBlock(document.getElementsByClassName('companyblock block1')[0]);


});





    $('.rightarrow').on('click', function () {
        $('.special-friend').animate({marginLeft: "-=500px"});

        var marginLeftValue = parseInt($('.special-friend').css('marginLeft'), 10);
        if (marginLeftValue <= -1001) {
    
        $('.special-friend').animate({marginLeft: "+=2000px"});

        }



    });

    $('.leftarrow').on('click', function () {
        var marginLeftValue = parseInt($('.special-friend').css('marginLeft'), 10);
        if (marginLeftValue <= -1) {
            $('.special-friend').animate({marginLeft: "+=500px"});
            }

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






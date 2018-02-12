$(document).ready(function () {
    $('.click-add-boder').click(function () {
       $('.click-add-boder').removeClass('active');
       $(this).addClass('active');
    });
    $('.div-device').click(function () {
       $('.div-offdevice').show();
       $('.div-offlocation').hide();
        $('.a-plus-scences').hide();
        $('.a-plus-devices').show();
    });
    $('.div-location').click(function () {
        $('.div-offdevice').hide();
        $('.div-offlocation').show();
        $('.a-plus-scences').show();
        $('.a-plus-devices').hide();
    });

    $('.ul-room-add-new-scences > li').click(function () {
       $(this).find('.div-check-add-new-scences').toggleClass('active');
    });

    $('.close-div-select-room').click(function () {
        $('.div-select-icon-room').animate({bottom: '-100%'}, 400);
        $('.div-opacity-full-room').animate({'opacity': 0}, 400);
        $('.div-opacity-full-room').css({'z-index': -1});

    });
    $('.change-new-icon').click(function () {
        $('.div-select-icon-room').animate({bottom: '0'}, 400);
        $('.div-opacity-full-room').animate({'opacity': 0.8}, 400);
        $('.div-opacity-full-room').css({'z-index': 2000});
    });

    $('.close-div-select-scences').click(function () {
        $('.div-select-icon-scences').animate({bottom: '-100%'}, 400);
        $('.div-opacity-full-scences').animate({'opacity': 0}, 400);
        $('.div-opacity-full-scences').css({'z-index': -1});

    });
    $('.div-bgc-plus-scences').click(function () {
        $('.div-select-icon-scences').animate({bottom: '0'}, 400);
        $('.div-opacity-full-scences').animate({'opacity': 0.8}, 400);
        $('.div-opacity-full-scences').css({'z-index': 2000});
    });
    $('.text-add-icon-scences').click(function () {
        $('.div-select-icon-scences').animate({bottom: '0'}, 400);
        $('.div-opacity-full-scences').animate({'opacity': 0.8}, 400);
        $('.div-opacity-full-scences').css({'z-index': 2000});
    });




});
$(document).ready(function () {
   $('.p-code').click(function () {
       $('.div-line-login').addClass('active');
       $('.input-pass').fadeIn();
   });

    // $('.btn-continue').click(function () {
    //     $('.div-line-login').addClass('active');
    //     $('.input-pass').fadeIn();
    // });

    $('.input-pass').click(function () {
        $(this).val('');
    });

});
$(document).ready(function () {
    $('.delivery-payment').on('click', function () {
        var top = $(window).scrollTop() + 50;
        $('.popup-delivery-payment').css({'top': top});
        $('#black-bg').stop(true, true).fadeIn(400);
        setTimeout(function () {
            $('.popup-delivery-payment').fadeIn(400);
        }, 480);
    });

    $('#close-popup-delivery-payment').on('click', function () {
        $('.popup-delivery-payment').stop(true, true).fadeOut(400);
        setTimeout(function () {
            $('#black-bg').fadeOut(400);
        }, 480);
    });
});
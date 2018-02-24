'use strict'


/*function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}*/

$(document).ready(function () {
    $('.courses__show').on('click', function(){
        var el = $(this);
        var elementToShow = el.siblings('.ul-show')
        if(el.hasClass('active')){
            el.removeClass('active');
            elementToShow.stop(true, true).slideUp(250);
        }
        else{
            el.addClass('active');
            elementToShow.stop(true, true).slideDown(250);
        }
    });
});




$(document).ready(function () {
    $('#hamburger').on('click', function () {
        var el = $(this);
        var p = el.parent('.in-wrapper');
        if (el.hasClass('active')) {
            p.children('nav').stop(true, true).slideUp(250);
            //p.children('.contacts').stop(true, true).slideUp(250);
            el.removeClass('active');
            $('header').removeClass('active');
        } else {
            p.children('nav').stop(true, true).slideDown(250);
            //p.children('.contacts').stop(true, true).slideDown(250);
            el.addClass('active');
            $('header').addClass('active');
        }
        // $('#black-bg').stop(true, true).fadeIn(400);
        //setTimeout(function () {
        //    $('#video').fadeIn(400);
        //}, 480);
    });






});
$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        //pagination: '.swiper-pagination',
        slidesPerView: 1,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: 7000,
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
                loop: true,
    });
});
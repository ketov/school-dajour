$(document).ready(function () {
    
    
    /*scrollTo('#logo', '#kozub-block');*/
    function scrollTo(element, anchor) {
        $(element).click(function () {
            var destination = $(anchor).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
            return false;
        });

    }

    scrollTo('.header__video', '.video');
    scrollTo('.header__courses', '.courses');
    scrollTo('.header__for', '.for');
    scrollTo('.header__economy', '.economy');
    scrollTo('.header__reviews', '.reviews');
    scrollTo('.header__author', '.author');
    scrollTo('.header__form', '.form');

    scrollTo('.offer__button', '.economy');
    scrollTo('.courses__button', '.form');

    $('#form-button').click(function () {

                $('#input__email').removeClass('error');

                var req = new XMLHttpRequest();
                var formData = new FormData();

                var name = $('#input-name').val().trim();
                var email = $('#input-email').val().trim();
                var course = $('#input-course').val().trim();
                formData.append('name', name);
                formData.append('email', email);
                formData.append('course', course);

                req.onreadystatechange = function () {

                    if (req.readyState == 4) {
                        if (req.status == 200) {

                            var success = req.getResponseHeader("Success");
                            if (success != null) {
                                $('#form__success').html("Поздравляем! Вы все заполнили. В ближайшее время мы вам позвоним.");
                                $('#input-email').removeClass('error');
                                $('#form__error').html('');
                                $('#input-name, #input-email, #input-course').val('');
                                return;
                            } else {
                                $('#input-email').addClass('error');
                                $('#form__error').html('Введите правильный номер телефона: +7 xxx xxx xx xx или эл. почту');
                                $('#form__success').text('');
                            }
                        }//if (req.status == 200)
                    }//if (req.readyState == 4)
                }//req.onreadystatechange = function
                req.open("POST", "form.php", true);
                req.send(formData);
           
    });

});
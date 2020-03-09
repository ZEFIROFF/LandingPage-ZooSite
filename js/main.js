$('.count').each(function () {
    $(this).prop('number', 0).animate({
        number: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$(document).ready(function (jQuery) {
    $(window).scroll(function () {
        let sticky = $('.header_block_menu'),
            scroll = $(window).scrollTop();

        if (scroll >= 200) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
});

$(document).ready(function () {
    $('.fa-bars').click(function (event) {
        $('fa-bars, .menu_up').toggleClass('active_menu');
    });
});
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
$(document).ready(function () {
    $('li a').on('click', function () {
        var hash = $(this)[0].hash;

        $('html,body').animate({
                scrollTop: $(hash).offset().top - 50
            },
            'slow');
    });
});
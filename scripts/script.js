$(document).ready(function () {

    $('#resume').on('click', function () {
        window.open('BurakKarakusCV.pdf')
    })

    $('li:not(:last-child) a').on('click', function () {
        var hash = $(this)[0].hash;

        $('html,body').animate({
            scrollTop: $(hash).offset().top - 50
        },
            'slow');
    });

    var i = 0;
    $(".portfolio img")
        .click(function () {
            $('.overlay img').attr('src', $(this).attr('src'));

            $('.overlay').show('slow');
        });

    $('.close').click(function () {

        $('.overlay img').attr('src', '');
        $('.overlay').hide('slow');
    });
});
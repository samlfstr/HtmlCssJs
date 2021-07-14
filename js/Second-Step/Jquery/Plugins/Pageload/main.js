// Selection
$(".animsition").animsition({
    inClass: 'fade-in-up-sm',
    outClass: 'fade-out-up-sm',
    linkElement: 'header nav a',
    inDuration: 500,
    outDuration: 300
});

// Selection
let header_select = $('.header').sticky();

var emailLink = $('<a href="mailto:help@teamtreehouse.com">Email us</a>');

$(document).ready(function () {
    $("h5").sticky({topSpacing: 60})
        .on('sticky-start', function () {
            $(this).append(" ").append(emailLink);
        })
        .on('sticky-end', function () {
            emailLink.remove();
        });

    header_select.on(
        'sticky-start',
        () => {
            $('.description').html('<h1 class="description">We build <strong> Greate </strong> apps.</h1>');
        }).on(
        'sticky-end',
        () => {
            $('.description').html('<h1 class="description">We build apps</h1>');
        }
    );

    $('.slicky').slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1,
        arrowRight : true,
        arrowLeft : true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

});


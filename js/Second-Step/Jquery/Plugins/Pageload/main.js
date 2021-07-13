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

header_select.on(
    'sticky-start',
    () => {
        $('.description').html('<h1 class="description">We build <strong> Greate </strong> apps.</h1>');
    }
);

header_select.on(
    'sticky-end',
    () => {
        $('.description').html('<h1 class="description">We build apps</h1>');
    }
);

var emailLink = $('<a href="mailto:help@teamtreehouse.com">Email us</a>');
$(() => {
    $("h5").sticky({
        topSpacing: 64
    }).on(
        'sticky-start',
        () => {
            $(this).append(" ").append(emailLink);
        }).on(
        'sticky-end',
        () => {
            emailLink.remove();
        });
});


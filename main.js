function handleInitialBanner() {
    var bannerNumber = Math.ceil(Math.random() * 3);
    var bannerName = 'banner' + bannerNumber;

    $('.banner').css('background-image', 'url(images/' + bannerName + '.png)')
}


$(document).ready(function() {
    handleInitialBanner();
});
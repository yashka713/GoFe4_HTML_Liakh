$(function() {
    $(function() {
        $('.jcarousel').jcarousel({
            // Core configuration goes here
        });

        $('.jcarousel-prev').click(function() {
            $('.jcarousel').jcarousel('scroll', '-=1');
        });

        $('.jcarousel-next').click(function() {
            $('.jcarousel').jcarousel('scroll', '+=1');
        });
    });

    $('.center-content-block').
});
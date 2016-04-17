'use strict'
$(document).ready(function () {

    //$('carousel-hider').myCarousel()

    var header = $('#base-template').html();
    var template = tmpl(header, base);
    $('.wrapper').append(template);

});
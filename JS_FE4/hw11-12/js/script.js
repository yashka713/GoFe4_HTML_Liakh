'use strict'
$(document).ready(function () {

    $('.carousel-list').myCarousell();

    var header = $('#base-template').html();
    var template = tmpl(header, base);
    $('.wrapper').append(template);

});
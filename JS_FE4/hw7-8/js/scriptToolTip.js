'use strict'

$(document).ready(function () {
    $('label + input').hover(
        function(){
            $(this).parent().append('<span>' + $(this).attr('title') + '</span>');
        },function(){
            $('span').remove();
    });
    $('.btn_helper').on('click', function(){
        $('span').remove();
        $('label + input').each(function() {
            $(this).parent().append('<span>' + $(this).attr('title') + '</span>');
        });
        setTimeout(function(){
            $('span').remove();
        }, 4000);
    })
});
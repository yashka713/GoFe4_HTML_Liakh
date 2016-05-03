'use strict'
var obj;
var value;

function GoogleCallback(jqueryObj, data) {
    obj = data.results;

    var header = $('#base-template').html();
    var template = tmpl(header, obj);

    $('.wrapper-answer').append(template);

}

$(document).ready(function () {

    function Sender() {
        $('.answers').remove();
        value = $('.wrapper-text').val();
        $.ajax({
            url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=' +
            'ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg' +
            '&rsz=large' + '&q=' + value + '&callback=GoogleCallback&context=?',
            dataType: 'jsonp'
        });
    }

    document.onkeydown = function(e){
        if (e.keyCode==13) Sender();
    };
    $('.wrapper-submit').on('click', Sender);
});
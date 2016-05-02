'use strict'
var obj;
var value;


$(document).ready(function () {

    $('.wrapper-submit').on('click'|| 'keypress', function(){
    value = $('.wrapper-text').val();
        console.log(value);

        $.ajax({
        url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg' +
            '&rsz=large' + '&q=' + value + '&callback=GoogleCallback&context=?',
        dataType: 'jsonp'
    });
    })
});

function GoogleCallback (jqueryObj, data) {
    obj = data.results;
    console.log('value', obj);

    var header = $('#base-template').html();
    var template = tmpl(header, obj);

    $('.wrapper-answer').append(template);

}
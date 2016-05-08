/**
 * Created by Ярик on 11.04.2016.
 */
(function($){

        $.fn.myCarousell = function() {
                var $item = $('.carousel-item');
                console.log($item);
                var currItem = 0;
                var itemWidth = parseInt($item.css('width'));
                console.log(itemWidth);

                for (var i = 0; i < $item.length; i++)
                    $item.eq(i).css('left', i * itemWidth + 'px');

                function changeItem(direction) {
                    var nextItem = (currItem + direction + $item.length) % $item.length;
                    currItem = nextItem;
                    for (var i = 0; i < $item.length; i++)
                        $item.eq(i).css('left', (i - currItem) * itemWidth + 'px');
                }

                $('.myCarousel_button--left').on('click', function () {
                    if (currItem < $item.length - 1) changeItem(1);
                });
                $('.myCarousel_button--right').on('click', function () {
                    if (currItem > 0) changeItem(-1);
                });
        }
})(jQuery);
'use strict'
$(document).ready(function () {

    $('.carousel-list').myCarousell();

    var header = $('#base-template').html();
    var template = tmpl(header, base);
    $('.wrapper').append(template);

});
(function(){
  var cache = {};
   this.tmpl = function tmpl(str, data){
    // Выяснить, мы получаем шаблон или нам нужно его загрузить
    // обязательно закешировать результат
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
      
      // Сгенерировать (и закешировать) функцию, 
      // которая будет служить генератором шаблонов
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
        
        // Сделать данные доступными локально при помощи with(){}
        "with(obj){p.push('" +
        
        // Превратить шаблон в чистый JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
    
    // простейший карринг(термин функ. прог. - прим. пер.)
    // для пользователя
    return data ? fn( data ) : fn;
  };
})();


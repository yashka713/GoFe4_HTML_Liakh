/**
 * Created by Ярик on 11.04.2016.
 */
(function($){

        $.fn.myCarousell = function() {
                var $item = $('.carousel-item');
                var currItem = 0;
                var itemWidth = parseInt($item.css('width'));

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
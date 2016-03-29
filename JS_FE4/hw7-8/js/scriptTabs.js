/**
 * Created by Ярик on 29.03.2016.
 */
'use strict'
$(document).ready(function () {
    $(".tab_item").not(":first").hide();
    $(".wrapper2 .tab").click(function() {
        $('.wrapper2 .tab').removeClass("active").eq($(this).index()).addClass("active");
        $('.tab_item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");
});
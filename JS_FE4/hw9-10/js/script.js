/**
 * Created by Ярик on 29.03.2016.
 */
'use strict'
$(document).ready(function () {
    $("#owl-demo").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });

    $("#country_id").selectbox();

    $(".niceCheck").mousedown(
        /* при клике на чекбоксе меняем его вид и значение */
        function () {
            changeCheck($(this));
        });

    $(".niceCheck").each(
        /* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
        function () {
            changeCheckStart($(this));
        });

    function changeCheck(el)
    /*
     функция смены вида и значения чекбокса
     el - span контейнер дял обычного чекбокса
     input - чекбокс
     */ {
        var el = el,
            input = el.find("input");
        if (!input.attr("checked")) {
            el.css("background-position", "0 -17px");
            input.attr("checked", true)
        } else {
            el.css("background-position", "0 0");
            input.attr("checked", false)
        }
        return true;
    }

    function changeCheckStart(el)
    /*если установлен атрибут checked, меняем вид чекбокса*/ {
        var el = el,
            input = el.find("input");
        if (input.attr("checked")) {
            el.css("background-position", "0 -17px");
        }
        if ($(".checkbox-block")){
            console.log("123");
            $(".checkbox-block").removeClass("niceCheck");
        }
        return true;
    }

    $('.dropdown').hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
            $(this).children('.sub-menu').css('z-index', '100');
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );
});
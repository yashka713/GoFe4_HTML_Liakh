'use strict'
$(document).ready(function () {
    var tmpl = _.template($('#base-template').html());
    $('.wrapper').html(tmpl(database));

    var $appendModal = $('<div class="modal-window">');

    var tempBase = localStorage.getItem('dataBank');
    var base= JSON.parse(tempBase);

    $('input[type="checkbox"]').on('click', function(){
        $(this).closest('.question-block').find('input[type="checkbox"]').prop("checked", false);
        $(this).prop("checked", true);
    });

    $('.button-checked').on('click', function(){

        var arrAnswerType = [];
        var kinestetik = 0;
        var audial = 0;
        var visual = 0;
        var discrete = 0;
        var res;

        var $chkBox = $('input[type="checkbox"]:checked');
        var userNickName = $('.user-name-input').val()|| 'user_NoName';
        for (var k=0; k < $chkBox.length; k++){
            var chkID = $chkBox.eq(k).attr('id');
            chkID = chkID.substr(chkID.indexOf('_')+1);
            var i = +chkID.substr(0,chkID.indexOf('_'));
            var j = +chkID.substr(chkID.indexOf('_')+1);
            if     (base.questions[i].answer[j].individualType == 'kinestetik') kinestetik++;
            else if(base.questions[i].answer[j].individualType == 'audial') audial++;
            else if(base.questions[i].answer[j].individualType == 'visual') visual++;
            else if(base.questions[i].answer[j].individualType == 'discrete') discrete++;
        }
        arrAnswerType = [userNickName, kinestetik, audial, visual, discrete];
        if ((kinestetik + audial + visual + discrete) < 6){
            alert("Ответьте, пожалуйста, на все тесты!");
            $('input[type="checkbox"]').prop("checked", false);
        }
        var temp = JSON.stringify(arrAnswerType);
        localStorage.setItem(userNickName ,temp);
        $('input[type="checkbox"]').prop("checked", false);

        $('body').append($appendModal);

        if((kinestetik > audial)&&(kinestetik > visual)&&(kinestetik > discrete)) res = description.kinestetik;
        else if((audial > visual)&&(audial > discrete)) res = description.audial;
        else if(visual > discrete) res = description.visual;
        else res = description.discrete;

        $('.modal-window').append('<p class="paragraph">' + res + '</p>');



    });

    $appendModal.on('click', function(){
        $appendModal.hide();
    });

});
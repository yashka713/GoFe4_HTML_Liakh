/**
 * Created by Ярик on 16.04.2016.
 */
"use strict"

var database = {
    title: "Аудиал, визуал, кинестетик, дискрет. Кто вы?",
    questions:[
        {
            question:"Вы принимаете важные решения опираясь на...",
            answer:[
                {textAnswer:"чувства и интуицию", individualType:'kinestetik'},
                {textAnswer:"то, что лучше звучит", individualType:'audial'},
                {textAnswer:"то, что лучше выглядит и более красиво", individualType:'visual'},
                {textAnswer:"точное и педантичное изучение всех обстоятельств и перспектив", individualType:'discrete'}
        ]},
        {
            question:"Во время конфликта с человеком на вас сильнее всего влияет...",
            answer:[
                {textAnswer:"тон и интонации голоса", individualType:'audial'},
                {textAnswer:"могу ли я или нет, ясно видеть точку зрения другого человека", individualType:'visual'},
                {textAnswer:"логика его аргументации", individualType:'discrete'},
                {textAnswer:"насколько вы находитесь в контакте с его чувствами, делится ли он своими переживаниями",
                    individualType:'kinestetik'}
        ]},
        {
            question:"Вы проще всего понимаете, что происходит с вами, когда...",
            answer:[
                {textAnswer:"смотрите на себя внимательно в зеркало и решаете, что надеть", individualType:'visual'},
                {textAnswer:"ловите свои ощущения", individualType:'kinestetik'},
                {textAnswer:"выражаете это словами", individualType:'discrete'},
                {textAnswer:"прислушиваетесь к тону своего голоса",individualType:'audial'}
            ]},
        {
            question:"Для вас самое простое...",
            answer:[
                {textAnswer:"подобрать идеальные громкость и звучание на стереосистеме", individualType:'audial'},
                {textAnswer:"работать с текстом, выбирая наиболее удачные места, относящиеся к изучаемому предмету",
                    individualType:'discrete'},
                {textAnswer:"выбрать чрезвычайно удобную мебель", individualType:'kinestetik'},
                {textAnswer:"подобрать идеальные сочетания цветов",individualType:'visual'}
            ]},
        {
            question:"Лучше всего вы запоминаете...",
            answer:[
                {textAnswer:"мелодии и звуки", individualType:'audial'},
                {textAnswer:"логические построения", individualType:'discrete'},
                {textAnswer:"ароматы и вкус", individualType:'kinestetik'},
                {textAnswer:"лица, цвета, картины",individualType:'visual'}
            ]},
        {
            question:"Вы...",
            answer:[
                {textAnswer:"настраиваетесь на звуки в своем окружении", individualType:'audial'},
                {textAnswer:"хорошо умеете осмысливать новые факты и данные", individualType:'discrete'},
                {textAnswer:"очень чувствительны к тому, как ткань, из которой сшита ваша одежда, воздействует на вашу " +
                "кожу", individualType:'kinestetik'},
                {textAnswer:"всегда обращаете внимание на цвет помещения, в котором оказываетесь",
                    individualType:'visual'}
            ]}
    ]
};
/*to JSON*/
$(document).ready(function () {
    var temp = JSON.stringify(database);
    localStorage.setItem('dataBank', temp);
});
/**
 * Created by Ярик on 21.04.2016.
 */
'use strict'
var description= {

    kinestetik :'КИНЕСТЕТИКИ — «чувствуют» окружающий мир. Люди этой категории не умеют скрывать свои чувства, ' +
    'их выдают глаза, поэтому они часто их опускают. Ответы на вопросы просты, прямолинейны. Решения они принимают, ' +
    'опираясь на свои чувства.Кинестетики любят посещать сауны, принимать горячие ванны и просто обожают, когда им ' +
    'делают массаж. После неприятного дня долго находятся в состоянии «выжатого лимона». Кинестетики ненавидят ' +
    'неудобную одежду, во всем предпочитают комфорт. Прикосновения они воспринимают лучше, чем слова, и обожают ' +
    'серьезные дискуссии. В свой внутренний мир они пускают только «избранных».',

    audial     :'АУДИАЛЫ - это очень редкий тип людей. Они обладают удивительно острым слухом и великолепной памятью. ' +
    'При общении им не обязательно смотреть на собеседника или прикасаться к нему, главное - слышать его.Аудиалы - ' +
    'это люди-магнитофоны. Могут запомнить и воспроизвести любой ваш рассказ до мельчайших подробностей. Но ни в коем ' +
    'случае нельзя прерывать их, т.к. они тотчас замолчат и более не будут с вами беседовать. Внешне аудиал может ' +
    'показаться человеком упрямым и надменным. Но это впечатление обманчиво, аудиалы, как правило, люди очень душевные ' +
    'и внимательные, готовые вас всегда выслушать и помочь советом. Из аудиалов получаются отличные психологи, ' +
    'прекрасные музыканты и лекторы.',

    visual     :'ВИЗУАЛЫ— это люди, которые «видят» окружающий мир. У них обычно высокий голос, зоркий взгляд, ' +
    'жесты горизонтальны, направлены от себя.При общении визуал смотрит в глаза и требует этого от собеседника. ' +
    'Его принцип: "он меня не слушает, потому что не смотрит на меня".Визуалы очень хорошо чувствуют окружающее их ' +
    'личное пространство, и, если вы вдруг вторгаетесь в него,сразу "закрываются", скрещивая руки и ноги. ' +
    'Не терпят прикосновений и тем более объятий.Часто производят впечатление снобов, хотя это далеко не всегда так…' +
    'Именно мужчина – визуал любит глазами. Для него главное – как женщина выглядит, насколько красиво ее лицо и ' +
    'пропорциональна фигура.  Визуалы не могут работать без заранее разработанных схем. Приступая к работе они' +
    ' четко должны представлять себе стратегию. Визуалы любят наглядные пособия и грамотно оформленные отчеты. ' +
    'Талантливо систематизируя работу, эти люди умеют правильно распределять задачи между сотрудниками. Визуалы, как ' +
    'правило, не только лучшие специалистыв своем деле, они наиболее активны и лучше многих умеют использовать свою ' +
    'память, но им нельзя говорить "нет" и воздействовать на них криком.',

    discrete   :'ДИСКРЕТЫ – это весьма своеобразный тип людей. Они более ориентированы на смысл, содержание, важность' +
    ' и функциональность. Как сказал один мальчик: Я полюбил чеснок после того, как узнал, какой он полезный.Дискреты' +
    ' как бы оторваны от реального опыта – они более думают самими словами, а не тем, что за словами стоит. Для них ' +
    'написанное или проговоренное как бы и является реальностью. Если для всех остальных слова – это доступ к опыту, ' +
    'то для Дискретов весь опыт состоит из слов. Проблема дискретной системы в том, что она сама по себе, без ' +
    'обращения' +' к другим каналам, не способна менять информацию. Слова переходят только в слова, и все возвращается ' +
    'к исходной точке.'
};
/**
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
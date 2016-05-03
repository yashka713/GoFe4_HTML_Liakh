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
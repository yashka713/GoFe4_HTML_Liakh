/**
 * Created by Ярик on 09.03.2016.
 */
"use strict";
var mainObj = {
    createWrapper: function () {
        var wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        document.body.appendChild(wrapper);
    },
    createHeader: function () {
        var header = document.createElement('p');
        header.innerHTML = 'Тест по программированию';
        header.classList.add('center-header');
        var wrapper = document.querySelector('.wrapper');
        wrapper.insertBefore(header, null);
    },
    questionsAndAnswers: function () {
        var qAndA = [];
        /* Здесь будет происходить наполнение массива */

        /*вопрос-ответ №1*/
        var qa1 = {
            question: 'Вопрос №1',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
        };
        qAndA.push(qa1);

        /*вопрос-ответ №2*/
        var qa2 = {
            question: 'Вопрос №2',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
        };
        qAndA.push(qa2);

        /*вопрос-ответ №3*/
        var qa3 = {
            question: 'Вопрос №3',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
        };
        qAndA.push(qa3);

        /*создание формы и заполнение ее*/
        var form = document.createElement('form');
        form.classList.add('form-qa');
        var wrapper = document.querySelector('.wrapper');
        wrapper.appendChild(form);
        for (var i = 0; i < qAndA.length; i++) {

            /* Создание <p> */
            var pQuestion = document.createElement('p');
            pQuestion.classList.add('p-questions');
            form.appendChild(pQuestion);

            /* Создание <label> в <p> */
            var labelQuestion = document.createElement('label');
            labelQuestion.classList.add('label-questions');
            var counter = i + 1;
            labelQuestion.innerHTML = counter + ". " + qAndA[i].question;
            pQuestion.appendChild(labelQuestion);
            /* цикл на вывод ответов*/

            for (var j = 0; j < qAndA[i].answers.length; j++) {

                /* создание p, в который вложены checkbox и label */
                var pAnswers = document.createElement('p');
                pAnswers.classList.add('p-answers');
                form.appendChild(pAnswers);

                /* создание и вывод Checkbox */
                var checkboxAnswers = document.createElement("INPUT");
                checkboxAnswers.setAttribute("type", "checkbox");
                checkboxAnswers.setAttribute("id",(''+ i) + ('' + j));

                var labelAnswers = document.createElement('label');
                labelAnswers.setAttribute('for', (''+ i) + ('' + j));

                pAnswers.appendChild(labelAnswers);
                labelAnswers.appendChild(checkboxAnswers);

                labelAnswers.innerHTML += '' + qAndA[i].answers[j];
            }
        }
    },
    createButton: function () {
        var button = document.createElement("INPUT");
        button.setAttribute("type", "submit");
        button.setAttribute('value', 'Проверить мои результаты');
        button.classList.add('button');
        var wrapper = document.querySelector('.wrapper');
        wrapper.appendChild(button);

        /*тестим вставку style для кнопки */
        button.style.fontSize = '18px';
        button.style.padding = '5px 15px';
        button.style.marginTop = '50px';
        button.style.marginLeft = '-120px';
        button.style.left = '50%';
        button.style.textAlign = 'center';
        button.style.position = 'absolute';
        button.style.backgroundColor = 'powderblue';
    },
    constructor: function () {
        this.createWrapper();
        this.createHeader();
        this.questionsAndAnswers();
        this.createButton();
    }
};
mainObj.constructor();
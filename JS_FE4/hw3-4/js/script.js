/**
 * Created by Ярик on 09.03.2016.
 */
"use strict"
var mainObj = {
    createWrapper : function(){
        var wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        document.body.appendChild(wrapper)
    },
    createHeader : function(){
        var header = document.createElement('p');
        header.innerHTML = 'Тест по программированию';
        header.classList.add('center-header');
        var wrapper = document.querySelector('.wrapper');
        wrapper.insertBefore(header, null);
    },
    questionsAndAnswers : function(){
        var qAndA = [];
        /* Здесь будет происходить наполнение массива
        *q AndA*/

        /*вопрос-ответ №1*/
        var qa1 = {
            question : 'Вопрос №1',
            answers  : ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
        }
        qAndA.push(qa1);
        /*вопрос-ответ №2*/
        var qa2 = {
            question : 'Вопрос №2',
            answers  : ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
        }
        qAndA.push(qa2);
        /*вопрос-ответ №3*/
        var qa3 = {
            question : 'Вопрос №3',
            answers  : ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
        }
        qAndA.push(qa3);
        console.log(qAndA);
    }
};
mainObj.createWrapper();
mainObj.createHeader();
mainObj.questionsAndAnswers();
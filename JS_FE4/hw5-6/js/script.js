'use strict'
var Timer = {
   proceedTimerID: '',
    startTimerID: '',
    currTime: 0,
    startTime: 0,
    prevTime: 0,

    Proceed: function () {
        Timer.proceedTimerID = setInterval(function () {
            var t = Timer.prevTime + Timer.currTime - Timer.startTime;
            var ms = t % 1000;
            t = (t / 1000) >> 0;
            var s = t % 60;
            t = (t / 60) >> 0;
            var m = t % 60;
            t = (t / 60) >> 0;
            var h = t % 24;
            var output = document.getElementById('output');
            output.innerHTML = '' + (((h / 10) >> 0)) + (h % 10) + ':' +
                ((m / 10) >> 0) + (m % 10) + ':' +
                ((s / 10) >> 0) + (s % 10) + '.' +
                ((ms / 100) >> 0) + ((ms % 100 / 10) >> 0) + '' + (ms % 10);
        }, 7);
    },

    Start: function () {
        var date = new Date();
        Timer.startTime = date.getTime();
        Timer.currTime = Timer.startTime;
        Timer.startTimerID = setInterval(function () {
            var date = new Date();
            Timer.currTime = date.getTime();
        }, 13);

        var stopBtn = document.getElementById('stop_btn');
        var startBtn = document.getElementById('start_btn');
        startBtn.classList.add('hidden');
        stopBtn.classList.remove('hidden');
    },

    Stop: function () {
        clearInterval(Timer.startTimerID);
        var date = new Date();
        Timer.currTime = date.getTime();
        Timer.prevTime = Timer.prevTime + Timer.currTime - Timer.startTime;
        Timer.currTime = 0;
        Timer.startTime = 0;

        var stopBtn = document.getElementById('stop_btn');
        var startBtn = document.getElementById('start_btn');
        stopBtn.classList.add('hidden');
        startBtn.classList.remove('hidden');
    },

    Reset: function () {
        clearInterval(Timer.startTimerID);
        clearInterval(Timer.proceedTimerID);
        Timer.prevTime = 0;
        Timer.currTime = 0;
        Timer.startTime = 0;
        output.innerHTML = '00:00:00.000';

        var stopBtn = document.getElementById('stop_btn');
        var startBtn = document.getElementById('start_btn');
        stopBtn.classList.add('hidden');
        startBtn.classList.remove('hidden');
    },

    Begin: function () {
        this.Start();
        this.Proceed();
    }
};
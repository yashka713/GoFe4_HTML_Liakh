/**
 * Created by Ярик on 10.03.2016.
 */
"use strict"

var m = prompt("указанное число: ");
var n = prompt("указанная степень: ");

/*recursion*/
function powMyV1(a ,b){
    if (b < 0){
        console.log("ERROR");
    }
    else if (b == 0) {
        return 1;
    }
    else if (b == 1) {
        return a;
    }
    else {
        return a*powMy(a,b-1);
    }
}

/*Exponential*/
function powMyV2(a ,b){
    if (b < 0){
        console.log("ERROR");
    }
    else if (b == 0) {
        return 1;
    }
    else if (b == 1) {
        return a;
    }
    else {
        var result = Math.exp(a*(Math.log(b)));
        return result;
    }
}

/*for (most simple)*/
function powMyV3(a ,b){
    var result = 1;
    if (b < 0){
        console.log("ERROR");
    }
    else if (b == 0) {
        return 1;
    }
    else if (b == 1) {
        return a;
    }
    else {
        for (var i = 0; i < b; i++) {
            var result = result*a;
        }
        return result;
    }
}
/*OUTPUT*/
console.log(powMyV1(m,n));
console.log(powMyV2(m,n));
console.log(powMyV3(m,n));
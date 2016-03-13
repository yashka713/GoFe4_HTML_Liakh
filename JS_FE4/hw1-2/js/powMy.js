/**
 * Created by Ярик on 10.03.2016.
 */
"use strict";
/*INPUT*/
var m = +prompt("указанное число: ");
var n = +prompt("указанная степень: ");

/*OUTPUT*/
console.log(powMyV1(m,n));
console.log(powMyV2(m,n));
console.log(powMyV3(m,n));

/*recursion*/
function powMyV1(a ,b){
    if (b==1) return a;
    return a*powMyV1(a,b-1);
}

/*Exponential*/
function powMyV2(a ,b){
    var result =1;
    if (b < 0){
        result = 0;
    }
    else if (b == 0) {
        result = 1;
    }
    else {
        result = Math.exp(b*(Math.log(a)));
    }
    return result;
}

/*for (most simple)*/
function powMyV3(a ,b){
    var result = 1;
    if (b < 0){
        result = 0;
    }
    else if (b == 0) {
        result = 1;
    }
    else if (b == 1) {
        result = a;
    }
    else {
        for (var i = 0; i < b; i++) {
            result = result*a;
        }
    }
    return result;
}

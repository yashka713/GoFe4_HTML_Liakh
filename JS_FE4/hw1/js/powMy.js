/**
 * Created by Ярик on 10.03.2016.
 */
"use strict"

var m = prompt("указанное число:");
var n = prompt("указанная степень:");

/*recursion*/
function powMy(a ,b){
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

/*OUTPUT*/
console.log(powMy(m,n));
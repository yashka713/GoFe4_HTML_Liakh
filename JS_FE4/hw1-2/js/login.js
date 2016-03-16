/**
 * Created by Ярик on 09.03.2016.
 */
"use strict"
var arrName = [];
for(var i=0; i < 5; i++){
    arrName[i] = prompt("Введите имя " + (i+1) + " человека:");
}
var login = prompt("Введите имя для поиска:", '')||' ';
var successfulLogin="ЭРОР404!";
for (i=0; i<arrName.length ; i++){
    if(login == arrName[i]){
        successfulLogin = arrName[i] + ", Вы успешно вошли";
    }
}
     alert(successfulLogin);
/**
 * Created by Ярик on 09.03.2016.
 */
"use strict"
var arrName = [];
for(var i=0; i < 5; i++){
    arrName[i] = prompt("Введите имя " + (i+1) + " человека:");
}
var login = prompt("Введите имя для поиска:", '');
var successfulLogin='';
for (i=0; i<arrName.length ; i++){
    if(login == arrName[i]){
        successfulLogin = arrName[i];
    }
}
 if ((successfulLogin !== null)&& (successfulLogin !== '')){
     alert(successfulLogin + ", Вы успешно вошли");
 }else{
     alert("ЭРОР404!");
 }
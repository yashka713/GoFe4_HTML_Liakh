/**
 * Created by Ярик on 02.05.2016.
 */
'use strict';
/*human*/
function Human(name, age, sex, height, weight){
    if ((name ==undefined) || (age==undefined)|| (sex==undefined) || (height==undefined)
        || (weight==undefined)) return alert('not date');
    var self = this;
    self.name =name;
    self.age = age;
    self.sex = sex;
    self.height = height;
    self.weight = weight;
}

/*worker*/
function Worker(name, age, sex, height, weight){
    Human.apply(this, arguments);
}
Worker.prototype = Object.create(Human.prototype);
Worker.prototype.constructor = Worker;
Worker.prototype.hardWork = function(placeWork, salary){
    this.placeWork = placeWork;
    this.salary = salary;
};

/*student*/
function Student(name, age, sex, height, weight){
    Human.apply(this, arguments);
}
Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;
Student.prototype.watchTV = function(placeStudying, scholarship){
    this.placeStudying = placeStudying;
    this.scholarship = scholarship;
};

/*create human & student*/
var worker1 = new Worker('Jack', 38, 'man', 190, 100);
worker1.hardWork('Kharkiv', 4500);
var worker2 = new Worker('Yana', 40, 'women', 168, 70);
worker2.hardWork('Kharkiv', 3500);

var student1 = new Student('Karl', 18,'man', 175, 75);
student1.watchTV('Kharkiv', 750);
var student2 = new Student('Kate', 20, 'woman', 175, 55);
student2.watchTV('Kharkiv', 1250);

/*output*/
console.log(worker1);
console.log(worker2);
console.log(student1);
console.log(student2);
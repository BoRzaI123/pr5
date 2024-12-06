'use strict';

/* 1 задание  */

let sum = 0
let etsalaries = {
    John: 100,	
    Ann: 160,
    Pete: 130
};

for (let key in etsalaries) {
    sum  += etsalaries[key];
};

alert( sum );

/* задание 2*/ 

function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof obj[key] === 'number') {
            obj[key] == obj[key] * 2;
        }
    }
}

/* задание 3*/

const calculator = {
    a: 0,
    b: 0,
  
    // Метод для ввода значений
    read: function() {
      this.a = +prompt("Введите первое число: ");
      this.b = +prompt("Введите второе число: ");
    },
  
    // Метод для нахождения суммы
    sum: function() {
      return this.a + this.b;
    },
  
    // Метод для умножения
    mul: function() {
      return this.a * this.b;
    }
  };
  

/* задание 4*/ 

function extractCurrencyValue(str){
    alert(str.slice(1))
}

extractCurrencyValue('$123');




/* задание 5 */ 

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];
let names = [];

for (let i = 0; i < users.length; i++) {
    names.push(users[i].name)
}

alert(names)

/* задание 6 */ 

function getAverageAge(users) {
    let a = 0;
    let ch = users.length;
    for (let i = 0; i < users.length; i++) {
        a += users[i].age
        
    }
    alert(a/ch)
}
"use strict";
let lname;
lname = "Mujahid";
let newName = lname.toUpperCase();
console.log(newName);
let age;
age = 25;
age = 25.5;
let ageInString = "25";
let newAge = parseInt(ageInString);
let isMarried;
// console.log(isMarried) compile error, isMarried is not defined
isMarried = false;
console.log(isMarried);
let emp;
emp = ["Mujahid", "Ansori", "Majid"];
let numbers = [1, 2, 3, 4, 5, 6];
let moreThanThree = numbers.filter(num => num > 3);
let sum = numbers.reduce((a, b) => a + b, 0);
console.log(moreThanThree, sum);
let blue = "BLUE" /* Color.BLUE */;
console.log(blue);
// tuples
let swapNumbers;
const swap = (a, b) => [b, a];
swapNumbers = swap(1, 2);
console.log(swapNumbers);

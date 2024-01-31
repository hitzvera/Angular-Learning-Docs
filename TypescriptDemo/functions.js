"use strict";
function add(number1, number2, number3) {
    return number3 ? number1 + number2 + number3 : number1 + number2;
}
console.log(add(1, 2));
function printSomething() {
    console.log("test dong");
}
const sum1 = (number1, number2, number3 = 10) => number1 + number2 + number3;
console.log(sum1(1, 2));
console.log(sum1(1, 2, 3));
const sum2 = (num1, num2, ...nums) => {
    return nums.reduce((a, b) => a + b, 0) + num1 + num2;
};
console.log(sum2(1, 2, 3, 4, 5));
function getItems(items) {
    return items;
}
const testGeneric = getItems([1, 2, 3, 4, 5]);
const testGeneric1 = getItems(["Mujahid", "Ansori", "Majid"]);

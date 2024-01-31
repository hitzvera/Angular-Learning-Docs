let lname: string;

lname = "Mujahid";
let newName = lname.toUpperCase();
console.log(newName);

let age: number;
age = 25;
age = 25.5;

let ageInString: string = "25";
let newAge = parseInt(ageInString);

let isMarried: boolean;

// console.log(isMarried) compile error, isMarried is not defined

isMarried = false;

console.log(isMarried);


let emp: string[];
emp = ["Mujahid", "Ansori", "Majid"];

let numbers: Array<number> = [1, 2, 3, 4, 5, 6];
let moreThanThree = numbers.filter(num => num > 3);
let sum = numbers.reduce((a, b) => a + b, 0);

console.log(moreThanThree, sum);


// enum
const enum Color {
    RED = "RED",
    GREEN = "GREEN",
    BLUE = "BLUE",
    YELLOW = "YELLOW"
}

let blue: Color = Color.BLUE;
console.log(blue);

// tuples

let swapNumbers: [number, number];
const swap = (a: number, b: number): [number, number] => [b, a];

swapNumbers = swap(1, 2);
console.log(swapNumbers)



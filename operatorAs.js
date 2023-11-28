// Problem 1: Write a JavaScript program to perform arithmetic operations on two numbers (addition, subtraction, multiplication, division).
const firstNum = 10;
const secNum = 20;

const add = (firstNum, secNum) => {
    return firstNum + secNum;
}
const sub = (firstNum, secNum) => {
    return firstNum - secNum;
}
const div = (firstNum, secNum) => {
    return firstNum / secNum;
}
const mul = (firstNum, secNum) => {
    return firstNum * secNum;
}
console.log(`Addition : ${add(firstNum, secNum)}`);
console.log(`Substration : ${sub(firstNum, secNum)}`);
console.log(`Division : ${div(firstNum, secNum)}`);
console.log(`Multiplication : ${mul(firstNum, secNum)}`);

// Problem 2: Write a JavaScript program to demonstrate the use of assignment operators on variables.

let a = 10;

console.log(a);

a += 10;

console.log(a);

a -= 10;

console.log(a);

a *= 10;

console.log(a);

a /= 10;

console.log(a);

a %= 10;

console.log(a);

a **= 10;

console.log(a);

// Problem 3: Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.

const x = 10;

if (x > 10){
    console.log( "x is greater than 10");
}else if (x < 10) {
    console.log("x is lesser than 10");
}else if (x = 10){
    console.log("x is 10");
}


// Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement.


const firstNumber = 10;
const secoundNumber = 20;

if (firstNumber > 0 && secoundNumber > 0) {
    console.log("Both are positive number");
}else if (firstNumber < 0 || secoundNumber < 0) {
    console.log("one is negitive number");
}else {
    console.log("both are negative number")
}


// Problem 5: Write a JavaScript program to perform bitwise operations on two numbers.


let b = 10;
let c = 20;

console.log(b & c);

console.log(b | c);

console.log(b ^ c);

console.log(b >> c);

console.log(b << c);

console.log(~c);

console.log(b >>> c);


// Problem 6: Write a JavaScript program to use the ternary operator to determine the larger of two numbers.


let d = 10;
let e = 20;

console.log(d > e ? d : e);


// Problem 7: Write a JavaScript program to demonstrate type operators on different data types.


console.log(typeof 1);

console.log(typeof true);

console.log(typeof abc);

console.log(typeof null);

console.log(typeof undefined);

console.log(typeof [1, 2, 3]);


// Problem 8: Write a JavaScript program to use string operators to concatenate two strings.


let f = "Neel";

let g = "Contractor";

console.log(f + g);


// Problem 9: Write a JavaScript program to demonstrate the use of the typeof operator on different variables.


      //same as question 7


// Problem 10: Write a JavaScript program to use the in operator to check if a property exists in an object.


const person = {
    name: "Neel",
    surname: "Contractor",
    age: 20
}

console.log("name" in person);

console.log("surname" in person);

console.log("age" in person);
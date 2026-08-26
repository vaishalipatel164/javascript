// Types of JavaScript Operators
// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// conditional operators


// Arithmetic Operators

// +	Addition
let x1 = 5;
let y1 = 2;
let z1 = x1 + y1;
console.log(z1);

// -	Subtraction
let x2 = 5;
let y2 = 2;
let z2 = x2 - y2;
console.log(z2);

// *	Multiplication
let x3 = 5;
let y3 = 2;
let z3 = x3 * y3;
console.log(z3);

// **	Exponentiation (ES2016)
let x4 = 5;
let z4 = x4 ** 2;
console.log(z4);

// x ** y produces the same result as Math.pow(x,y):
let x5 = 5;
let z5 = Math.pow(x5,2);
console.log(z5);

// /	Division
let x6 = 5;
let y6 = 2;
let z6 = x6 / y6;
console.log(z6);

// %	Modulus (Remainder)
let x7 = 5;
let y7 = 2;
let z7 = x7 % y7;
console.log(z7);

// ++	Increment
let x8 = 5;
x8++;
let z8 = x8;
console.log(z8);

// --	Decrement
let x9 = 5;
x9--;
let z9 = x9;
console.log(z9);

// Assignment Operators

// JavaScript Assignment Operators
// Assignment operators assign values to JavaScript variables.

// The = Operator
// The Simple Assignment Operator assigns a simple value to a variable.
// let x = 10;

// The += Operator
// The Addition Assignment Operator adds a value to a variable.
// let x = 10;
// x += 5;


// The -= Operator
// The Subtraction Assignment Operator subtracts a value from a variable.

// let x = 10;
// x -= 5;

// The *= Operator
// The Multiplication Assignment Operator multiplies a variable.


// let x = 10;
// x *= 5;


// The **= Operator
// The Exponentiation Assignment Operator raises a variable to the power of the operand.


// let x = 10;
// x **= 5;


// The /= Operator
// The Division Assignment Operator divides a variable.

// let x = 10;
// x /= 5;


// The %= Operator
// The Remainder Assignment Operator assigns a remainder to a variable.

// let x = 10;
// x %= 5;


// Logical Assignment Operators

// The &&= Operator
// The Logical AND assignment operator is used between two values.

// If the first value is true, the second value is assigned
// let x = true;
// let y = x &&= 10;


// The ||= Operator
// The Logical OR assignment operator is used between two values.

// If the first value is false, the second value is assigned.
// let x = false;
// let y = x ||= 10;

// Comparison Operators

// Comparison operators are used to compare two values.
// Comparison operators always return true or false.

// let text1 = "20";
// let text2 = "5";
// let result = text1 < text2;

// conditional operators

// if condition
// if condition else 
//  else if condition ...
// switch condition

let g=30;

if (g >= 90){
    console.log("A")
}
else if(g>=70){
    console.log("B")
}
else if(g>=60){
    console.log("C")
} 
else{
    console.log("D")
}
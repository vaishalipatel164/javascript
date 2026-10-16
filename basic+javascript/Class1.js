console.log("vaishali");

//Using Let Keyword:-Stored any type of data, local scope of variable.
let a = 8;
console.log(a);
let b = 'Vaishu';
console.log(b);
let c = true;
console.log(c);

//Using Var Keyword:- Update at any time.
var d = 4;
var d = 10; 
console.log(d);

//Using Const Keyword:- Once a Decleared not change.
const e = 12;
// e = 13;
console.log(e);

//Undefined and Null:-
let f ;
console.log(f);
let g = null;
console.log(g);

//Dynamic Typing :-
let lastName = 'vaishu';
console.log(lastName);  //In this Line String is stored.
lastName = 3;
console.log(lastName);  //In this Line Integer is stored.

//Pre Increment Operator:-
let h = 10;
console.log(++h);
//Post Increment Operator:-
let i = 6;
console.log(i++);
console.log(i);

//Pre Decrement Operator:-
let j = 10;
console.log(--j);
//Post Decrement Operator:-
let k = 11;
console.log(k--);
console.log(k);

//Comparison Operator:-
console.log(5>8);  //False
console.log(7<8);   //True  
console.log(3 >= 3);  //True  
console.log(7< 5);  //False
 console.log(7 !== 7);   //False
console.log(11 == '11');  //True   //Loose Equality
console.log(3 === 3);   //True   //Strict Equality
console.log(3 === '3');  //False


// Ternary Operator :--

let age = 27;
let Vote = (age >= 18) ? 'yes vote' : 'no vate';
console.log(Vote);

//If-else If-else Condition:-
let marks = 79;
if(marks >= 90) {
    console.log('A');
}
else if(marks >= 80) {
    console.log('B');
}
else if(marks >= 70) {
    console.log('C');
}
else if(marks >= 60) {
    console.log('D');
}
else{
    console.log('E');
}

// Switch Condition
let num = 1;
switch(num) {
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    default: console.log('D');
}

// For Loop
for (let i=1 ; i <=5 ; i= i+1) {
    console.log("babbar" +i);
};

// while loop:-
let x = 1;   //Initialisation
while (x <= 4) {   //Condition
    console.log(x );
    x++;      //Updation
}

// Do-WHile Loop:-

let v = 0;
do {
    console.log(v);
    v++;
} while(v <= 3)
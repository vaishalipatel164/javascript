console.log("Hello Guy's")

//FUnction Declaration:-
function run() {
    console.log('Running')
}
run();     //Function Call or Invoked.

//Function Assignment / or Named Assignment:-
let stand = function walk() {
    console.log('Walking');
}
stand();   //Function Call or Invoked.

//Anonymous Assignment:-
let stand1 = function() {
    console.log('Walks');
}
let jump = stand1();

//Applying on function call:-
function sum(a, b) {
    return a+b;
}
console.log(sum(3, 4));

//Arguments Function:-
function sum1(a,b) {
    console.log(arguments);
    return a+b;
}
let ans = sum1(5,3);

//Dynamic Function and Multiple Inputs:-
function sum2() {
    let total = 0;
    for(let value of arguments)
        total = total + value;
    return total;
}
let ans1 = sum2(1,2,3,4);
console.log(ans1);

//Rest Operator:-
function sum(num, sum,...argus) {
    console.log(argus);
}
sum(1,2,3,4,5,6);

//Default Parameters:-
function interest (p,r,y) {
    return p*r*y/100;
}
console.log(interest(1000, 10, 5));

//Gatter and Setter:-
//Getter-> Access to the properties.
let person = {
    fName : 'Love',
    lName : 'Babber',
get fullName() {
    return `${person.fName} ${person.lName}`;
},
set fullName(value) {        //Setter-> Change, mutate or manipulate to the properties.
    if (typeof value !== string)
        throw new error ('not a string');
    let parts =value.split(0);
    this.fName = parts(0);
    this.lName = parts(1); 
}
};
console.log(person.fullName);

// //Try & Catch:-
// try {
//     person.fullName = true;
// }
// catch (e) {
//     // alert ('you have sent a number in fullName');
//     alert (e);
// }
// console.log(person.fullName);

//Scope:-
{                      //Let Variable:-
    let a = 5;
    console.log(a);
}

{                      //Var Variable:-
    var b = 10;
    // console.log(b);
}
     console.log(b);
     
                     
function a() {        //Const Variable:-  
        const ab = 12;
    }
    const ab = 12;
    function b() {
        const ab = 12;
    }

//Reducing an Array:-
let arr = [1,2,3,4,5];
let total = 0;
for(let value of arr) 
    total = total + value;
console.log(total);
//use of reduce metho-->
let totalsum = arr.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);
console.log(totalsum);
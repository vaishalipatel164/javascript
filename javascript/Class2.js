console.log("hello jii");

// Creation of Object:-

// const rectangle = {
//     length : 10,
//     breadth : 20,

//     // Add Behaviour
//     draw : function() {     //function or method
//         console.log('drawing rectange');
//     }
// };

// Factory function:-

// function createRectangle(len, bre) {

//    return rectangle = {
//     length: len,
//     breadth: bre,

//     // Add Behaviour

//     draw() {     //function or method
//         console.log('drawing rectange');
//     }
//    };
// }
// let rectangleobj1= createRectangle(5, 4);

// Constructor Function:-

function Rectangle(len, bre) {
    this.length = len,
    this.breadth = bre,
    this.draw = function() {
        console.log('drawing');
    }
}

// Object creation using constructor function
let rectangleObject = new Rectangle(14, 26);

// Dynamic Nature of Object
 rectangleObject.color = 'green';       //Adding property
console.log(rectangleObject);

delete rectangleObject.color;          //Deleting property
console.log(rectangleObject);

let Rectangle1 = new Function (
    'length', 'breadth',
    `this.length = length,
    this.breadth = breadth,
    this.draw = function() {
        console.log('drawing');
    }`);
//Object creation using Rectangle
let rect = new Rectangle1(5, 10);
console.log(rect);

// Primitive Type:-
let a = 10;
let b = a;
a++;
console.log(a);
console.log(b);

// Reference Type:-
let c = { value: 10};
let d = c;
c.value++;
console.log(c.value);
console.log(d.value);

// // Case Second:-
// let e = {value: 12};
// function inc(e) {
//     e.value;
// }
// inc(a);
// console.log(e.value);

// For-in Loop:-Apply on the Objects.
let rectangle = {
    length: 22,
    breadth: 32,
};
for(let key in rectangle) {
    console.log(key,rectangle[key]);
}

// For-of Loop:- Apply on the Iterables.
for(let key of Object.keys(rectangle)) {
    console.log(key);
}
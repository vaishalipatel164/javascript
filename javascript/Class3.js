console.log("Hello jii Kaise Hai")

// Generate Primitive String:-
let lastName = "  babber";

// Generate Object String:-
let firstName = new String('Love');

// Template Literal:-
let message = `Hello ${lastName},
this is 
my first
message`;
console.log(message);

// Date And Time:-
let date = new Date();
console.log(date);
let date1 = new Date(' 28 december 2026 21:10');
console.log(date1);
let date2 = new Date(2004, 5 , 6, 11);
console.log (date2);

// Arrays Creation:-
let numbers = [1,4,3,6,9];
console.log(numbers);
//end -> push method,
//beginning -> unshift method,
//middle -> splice method.

// Searching:- (It's not right way)
console.log(numbers);
console.log(numbers.indexOf(4));
//we want to check if a number exist in an array:-
if(numbers.indexOf(4) != -1){
    console.log("Present");
}
else{
    console.log("Absent");
}
//It's right way:-
console.log(numbers.includes(5));

// Array Object Function:-
let courses = [
    { no:1, naam:'Love'},
    {no:2, naam2: 'Isqe'}
];
console.log(courses);

// Call Back Function:-
let course = courses.find(function(course) {
    return course.naam === 'Love';
})
console.log(course);

// Arrow Function:-
let course1 = courses.find(course1 => course1.naam === 'Love');
console.log(course1);

// Removing Element:-
let numbers1 = [1,2,3,4,5,6,7];
numbers1.pop();          //remove from last,
numbers1.shift()         //remove from starting,
numbers1.splice(2, 1);   //remove from middle.
console.log(numbers1);

// Emptying an Array:-
let numbers2 = [1,2,3,4,5];
let number = numbers2 ;
// numbers2.length = 0;   //right way to find empty array.
numbers2.splice(0, numbers.length)  //this is also right way.
console.log(numbers2);
console.log(number);

// Combining and Slicing Arrays:-
// Combined Array:-
let first = [1,2,3];
let second = [4,5,6];
let combined = first.concat(second);
console.log(combined);
//Slice Array:- removing element from array.
let sliced = combined.slice(2, 5);
console.log(sliced);

// Spread Operator:-
let first1 = [1,2,3];
let second1 = [4,5,6,7];
let combine = [...first1,'A', ...second1,'B',true];
console.log(combine);

// Iterating an Array:-
// For-of Loop:-
let arr = [10,20,30,40,50];
for(let value of arr){
    console.log(value);
}
// For-each Loop:-
arr.forEach(function(number){
    console.log(number);
})
//Converting in Arrow Function:-
arr.forEach(number => console.log(number));

//Joining Array:-
let numbers3 = [10,20,30];
const joined = numbers3.join(',');
console.log(joined);
//Split Array:-
let messages = "This is my first message";
let parts = messages.split(' ');
console.log(parts);
let joineds = parts.join('_');   //Again Joined.
console.log(joineds);

//Sorting Method:-
let numbers4 = [40,8,30,7,90];
numbers4.sort();
console.log(numbers4);
numbers4.reverse();      //reverse number.
console.log(numbers4);

// Filtering Arrays:-
let numbers5 = [1,2,3,4,-1,-2,-3,-4];
let filtered = numbers5.filter(function(value){
    return value >=0;
})
console.log(filtered);
//Converting in arrow function:-
let filtereds = numbers5.filter(value => value >=0 );
console.log(filtereds);

//MApping Function:-
let numbers6 = [11,22,33,44,55];
let item = numbers6.map(function(value){
    return 'student_no' + value;
})
console.log(item);
//Converting in arrow function:-
let items = numbers6.map(value => 'Student_no' + value);
console.log(items);

//Mapping with Object:-
let numbers7 = [1,2,3,-7,-8,-9];
let filtered1 = numbers7.filter(value => value >=0);
let mapping = filtered1.map(function(num) {
    return {value : num};
})
console.log(mapping);
//Converting in arrow function:-
let mappings = filtered1.map(num => {value: num});
console.log(mappings);

//Chaining Method:-
let numbers8 = [1,2,4,-6,-8,-10];
let mapping1 = numbers8.filter(value => value >=0).map(num => {value : num});
console.log(mapping1);
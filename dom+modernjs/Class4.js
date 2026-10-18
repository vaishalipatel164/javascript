console.log('Hello Class-4');

// //Synchronous Code
// function sync() {
//     console.log('first');
// }
// sync();
// console.log('second');

// //SetTimeOut is a Asynchronous Code and it execute when Call Stack is Empty.
// //Asynchronous Code
// setTimeout( function() {
//     console.log('third');
// }, 3000)
// function sync() {
//     console.log('first');
// }
// sync();
// console.log('second');

// //Promise Function:-
// let myPromise = new Promise(function(resolve, reject){
//     console.log('I am Inside Promise');
//     resolve(2004);
// })
// console.log('first');

// //Asynchronous Promise
// let myPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//     console.log('I am Inside Promise');
//     }, 4000);
//     //resolve(2004);
//     //reject(new Error('So Sad'))
// })
// console.log('second');

// //Using Two Promise:-
// let myPromise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//     console.log('I am Inside Promise1');
//     }, 5000);
//     // resolve(2004);
//     reject(new Error('So Sad'))
// });
// myPromise1.then((value) =>{console.log(value)},(error) =>{console.log('received an error')});
// // let myPromise2 = new Promise(function(resolve, reject){
// //     setTimeout(function(){
// //     console.log('I am Inside Promise2');
// //     }, 3000);
// //     //resolve(2004);
// //     //reject(new Error('So Sad'))
// // })
// console.log('second');

// //Using Then Method with Promise:-
// let waadaa1 = new Promise (function(resolve,reject){    //Create a new promise
//     setTimeout(() => {
//         console.log('settimeout1 started');
//     },2000);
//     resolve(true);
// })
// let output = waadaa1.then(() =>{
//     let waada2 = new Promise(function(resolve, reject) {
//          setTimeout(() => {
//         console.log('settimeout2 started');
//     },4000);
//         resolve("wadda2 resolved");
//     });
//     return waada2;
// })
// output.then((value) => console.log(value));

// //Async Function create:-
// async function abhi() {
//     //return 7;
//     return "vaishu";
// }

//Async Promise :-
async function measure() {
    let upWeather = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("UP is too hot");
    },5000);
});
let delhiWeather = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Delhi is too Cold");
    },6000);
});
let upw = await upWeather;
let dhw = await delhiWeather;
return [upw,dhw];
}


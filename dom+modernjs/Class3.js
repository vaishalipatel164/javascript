console.log("Hello jii, Day-3")

// //Adding 100 Para:-
// for(let i=1; i<=100; i++) {
//     let newElement =document.createElement('p');
//     newElement.textContent = 'This is Para' + i;
//     document.body.appendChild(newElement);
// }
// //Optimising a Bit:-
// const time3 = performance.now();
// let myDiv = document.createElement('Div');
// for(let i=1; i<=100; i++) {
//     let element = document.createElement('p');
//     element.textContent = 'This is para' + i;
//     myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);
// const time4 = performance.now();
// console.log("This took" + (time4-time3) +"ms");

// //Time Performance:-
// const time = performance.now();
// for(let i=1; i<=100; i++) {
//     let newElement =document.createElement('p');
//     newElement.textContent = 'This is Para' + i;
//     document.body.appendChild(newElement);
// }
// const time2 = performance.now();
// console.log("This took" + (time2-time) +"ms");

// //Using Fragment:-
// let fragment = document.createDocumentFragment();
// for(let i=1; i<=100; i++) {
//     let newElement =document.createElement('p');
//     newElement.textContent = 'This is Para' + i;
//     fragment.appendChild(newElement);
// };
// document.body.appendChild(fragment);  // one single Reflow, one single Repaint.

// function addPara() {
//     let para = document.createElement('p');
//     para.textContent = "Js is Single";
//     document.body.appendChild(para)
// }
// function appendNewMessage() {
//       let para = document.createElement('p');
//     para.textContent = "Sab Badhiya Hai";
//     document.body.appendChild(para)
// }
// addPara();
// appendNewMessage();
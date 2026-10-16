console.log("Hello Guy's");
// //Click Function on Document:-
// document.addEventListener('click', function() {
//     console.log('I have click on the document');
// });

// // 2nd Method :-
// function eventFunction() {
//     console.log('I have click on the document');
// }
// document.addEventListener('click', eventFunction);
// document.addEventListener('click', eventFunction);

// //Find Pointer Event:-
// const content = document.querySelector('#wrapper');
// content.addEventListener('click', function(vaishu) {
//     console.log(vaishu);
// })

// //Prevent Default Function:-
// let links = document.querySelectorAll('a');
// let thirdlink = links[2];
// thirdlink.addEventListener('click', function(anchor){
//     anchor.preventDefault();
//     console.log('Maza Aaya Beta...');
// });

// //Avoid Too Many Event:-
// let myDiv = document.createElement('div');            //Create Div Element
// function paraStatus(event){       
//         console.log('Para' + event.target.textContent);             
//     }
// myDiv.addEventListener('click', paraStatus) 
// for(let i=1; i<=100; i++) {                      //Run loop 100 times
//     let newElement = document.createElement('p');     //Ceate Paragraph Element
//     newElement.textContent = 'This is para' + ' ' + i;       

//     myDiv.appendChild(newElement);            //Paragraph is added on div
// }
// document.body.appendChild(myDiv);          //then, div is added in document.


//Filtering On Specific Tags Like Ex: On Span Tag.
let element = document.querySelector('#container');
element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN') {
         console.log('click on span' + event.target.textContent);
    }
});
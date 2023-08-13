 // Option--1
 function makeRed(){
    document.body.style.backgroundColor = 'red';
  }
//   options--2
  const makeGreen = document.getElementById('makeGreen');
  makeGreen.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor = 'green';
  })
//    options--3
  const makeBlue = document.getElementById('makeBlue').addEventListener('click', function makeBlue(){
    document.body.style.backgroundColor= 'blue';
  })
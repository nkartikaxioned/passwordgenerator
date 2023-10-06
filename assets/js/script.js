/* Author: 

*/
const output = document.querySelector('.result'),
  checkbox = document.querySelectorAll('.checkbox'),
  passLength = document.querySelector('.password_length'),
  passUpperCase = document.querySelector('.uppercase'),
  passLowerCase = document.querySelector('.lowercase'),
  passNumeric = document.querySelector('.number'),
  passSymbol = document.querySelector('.symbol'),
  copyButton = document.querySelector('.copy_button'),
  generatePassBtn = document.querySelector('.generate_pass_btn');
  let indexNum=[];

window.addEventListener('load', () => {

  generatePassBtn.addEventListener('click', () => {

    checkbox.forEach((check, index) => {
      if (check.checked == true) {
        indexNum=[index];
        console.log(indexNum);
      }
    })
  })


})

const funcArray =[getRandomUpper(),getRandomLower(),getRandomNumber(),getRandomSymbol()];
let lengthh=passLength.value;
let password='';
for(let i=0;i<lengthh;i++){
password+=funcArray[Math.floor(Math.random()*4)];
}

function getRandomUpper() {
  let value = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  return value;
}

function getRandomLower() {
  let value = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  return value;
}

function getRandomNumber() {
  let value = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  return value;
}

function getRandomSymbol() {
  const symbolString = "#@$_*&!";
  let randomSymbol = symbolString[Math.floor(Math.random()*symbolString.length)];
  return randomSymbol;
}






















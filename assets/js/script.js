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

  // let indexNum=[];
 
  const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol
   };


  generatePassBtn.addEventListener('click', () => {
    const length = +passLength.value;
    const containsUpper = passUpperCase.checked,
     containsLower = passLowerCase.checked,
     containsNumber = passNumeric.checked,
     containsSymbol = passSymbol.checked;

     console.log(length, containsUpper, containsLower, containsNumber, containsSymbol);
   
     output.innerText=generatePassword(containsUpper, containsLower, containsNumber, containsSymbol, length);
    
  });

 //copy password
 copyButton.addEventListener('click',() => {
   const textarea = document.createElement('textarea');
   const pass = output.innerText;

   if(!pass) {
    return;
   }

   textarea.value = pass;
 document.body.appendChild(textarea);
 textarea.select();
 navigator.clipboard.writeText(textarea.value);
//  textarea.remove();
 alert('Password copied to clipboard');
 })

 
  //function generates password
function generatePassword(upper,lower,number,symbol,length) {

   console.log('length :', length);
  //fliter out checked checkbox
     let password='';
     const typesCount = upper+lower+number+symbol;
     const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    console.log("typescount :", typesCount);
    console.log("typesArr :", typesArr);

     if(typesCount === 0) {
      return '';
     }

    for(let i=0; i<length; i+= typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];

        password += randomFunc[funcName]();
      })
    }

    const passwordGenerated= password.slice(0, length);
    return passwordGenerated;

    }

    //function to generate random uppercase letter
function getRandomUpper() {
  let value = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  return value;
}

//function to generate random lowercase letter
function getRandomLower() {
  let value = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  return value;
}

//function to generate random number
function getRandomNumber() {
  let value = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  return value;
}

//function to select random symbol from String
function getRandomSymbol() {
  const symbolString = "#@$_*&!";
  let randomSymbol = symbolString[Math.floor(Math.random()*symbolString.length)];
  return randomSymbol;
}





// const funcArray =[getRandomUpper(),getRandomLower(),getRandomNumber(),getRandomSymbol()];
// let lengthh=passLength.value;
// let password='';
// for(let i=0;i<lengthh;i++){
// password+=funcArray[Math.floor(Math.random()*4)];
// }

// checkbox.forEach((check, index) => {
    //   if (check.checked == true) {
    //     indexNum=[index];
    //     console.log(indexNum);
    //   }
    // })






















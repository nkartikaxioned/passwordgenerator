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


window.addEventListener('load', () => {

  generatePassBtn.addEventListener('click', () => {

    checkbox.forEach((check, index) => {
      if (check.checked == true && index!==1 && index!==2 && index!==3) {
        console.log(index);
      }
    })
  })
})























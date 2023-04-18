// const displayScreen = document.getElementById('displayScreen');
// let defaultValue = displayScreen.textContent = '0';
// const insertNumber = number => (displayScreen.textContent === defaultValue) ? displayScreen.textContent = number : displayScreen.textContent += number;
// const equalTo = () => (displayScreen.textContent) ? displayScreen.textContent = eval(displayScreen.textContent) : false;
// const eraseNumber = () => displayScreen.textContent = displayScreen.textContent.substring(0, displayScreen.textContent.length - 1);
// const clearInput = () => displayScreen.textContent = defaultValue;

const displayScreen = document.getElementById('displayScreen');
let defaultValue = displayScreen.textContent = '0';

function insertNumber(number) {
  const displayScreen = document.getElementById('displayScreen');
  if (displayScreen.textContent === defaultValue) {
    displayScreen.textContent = number;
  } else {
    displayScreen.textContent += number;
  }
}

function eraseNumber() {
  const displayScreen = document.getElementById('displayScreen');
  displayScreen.textContent = displayScreen.textContent.substring(0, displayScreen.textContent.length - 1);
  if (displayScreen.textContent === '') {
    displayScreen.textContent = defaultValue;
  }
}

function clearInput() {
  const displayScreen = document.getElementById('displayScreen');
  displayScreen.textContent = defaultValue;
}

function equalTo() {
  const displayScreen = document.getElementById('displayScreen');
  if (displayScreen.textContent) {
    displayScreen.textContent = eval(displayScreen.textContent);
  } else {
    return false;
  }
}


// Gives the input field a maximum lenght of characters

// function insertNumber(number) {
//   const displayScreen = document.getElementById('displayScreen');
//   const maxLength = 11;
  
//   if (displayScreen.textContent.length < maxLength) {
//     if (displayScreen.textContent === defaultValue) {
//       displayScreen.textContent = number;
//     } else {
//       displayScreen.textContent += number;
//     }
//   }
// }

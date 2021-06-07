const input = require('readline-sync');


// TODO 1: write a validator 
// that ensures input starts with "a"

// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code! 



function getValidInput(prompt, isValid) {

   let userInput = input.question(prompt);

   while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
   }

   return userInput;
}

let isInputA = function(inputA){
  if(inputA.indexOf(`a`) === 0 || inputA.indexOf(`A`) === 0){
    return true;
  } else {
    return false;
  }
};

console.log(getValidInput('Enter a word beinging with "a": ', isInputA));

let isInputVowel = function(inputV){
  let vowels = ['a','e','i','o','u','y'];
  //for(let i = 0; i < vowels.length; i++){
    if(vowels.includes(inputV[0])){
      return true;
    } else {
      return false;
    }
  //} 
};

console.log(getValidInput('Enter a word beinging with a vowel: ', isInputVowel));
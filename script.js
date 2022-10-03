var generateBtn = document.querySelector("#generate");

function generatePassword() {

//function to randomize chosenOptions from user
  function randomFunc(min, max) {
    if (!max) {
      max = min ;
      min = 0 ;
    } 
    var randomNum = Math.random() ;
    return Math.floor(min * (1 -  randomNum) + randomNum * max) ; 
  }
//function to return a list of randomized characters that was taken from randomFunc
  function getRandomChar(list) {
    return list[randomFunc(0, list.length - 1)] ;
  }

//while loop to keep prompt box opened until cancelled
  while (true) {
    var userInput = window.prompt("What is your desired password length") ;
    var passwordLength = parseInt(userInput) ; 

  //return to default screen if clicked "cancelled"
    if (userInput === null) {
      return ;
    }
  //Check if input is a number
    if(isNaN(passwordLength)) {
      window.alert("Please enter a number") ;
    } else if(passwordLength < 8 || passwordLength > 128) {
      window.alert ("Password must be between 8-128 characters") ;
    } else {
      break;
    }
  }

//variables for the user options
  var upperPrompt = window.confirm("Do you want numbers in your password?") ;
  var lowerPrompt = window.confirm("Do you want lowercase letters in your password?") ;
  var numberPrompt = window.confirm("Do you want uppercase letters in your password?") ;
  var symbolPrompt = window.confirm("Do you want symbols in your password?") ;

//arrays of each character category 
  var upperChar = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"] ;
  var lowerChar = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"] ;
  var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] ;
  var symbolChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "[", "]", ";", "'", ",", ".", "/", "<", ">", "?", "`", "~",] ;

//to store the chosen categories
  var chosenOptions = [] ;

//if statements to correspond to user choice of category
  if (upperPrompt === true) {
    chosenOptions.push(upperChar) ; 
  }

  if (lowerPrompt === true) {
    chosenOptions.push(lowerChar) ; 
  }
  if (numberPrompt === true) {
    chosenOptions.push(numberChar) ; 
  }
  if (symbolPrompt === true) {
    chosenOptions.push(symbolChar) ; 
  }

  if(chosenOptions === 0) {
    chosenOptions.push(upperChar)
  }

//Password generated from the randomized characters chosen by user
  var initPassword = "" ;

  for(var i = 0; i < passwordLength; i++) {
    var randomList = getRandomChar(chosenOptions) ;
    var randomChar = getRandomChar(randomList) ;
    initPassword += randomChar ;
  }
  return initPassword ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
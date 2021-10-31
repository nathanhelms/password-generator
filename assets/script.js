// @ts-check

// Assignment code here


// Add event listener to generate button

var generateBtn = document.querySelector("#generate");



//Array of lowercase letters

var lowercaseArray = 
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Array of uppercase letters

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//Array of numbers 

var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

//Array of special characters

var symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"]

// Write password to the #password input

function generatePassword(x, y) {
  //password length
  var passwordLength = parseInt(prompt("How long do you want your password to be?"))

  if (passwordLength <8 || passwordLength >128) {
    alert("Password length must be between 8 and 128")
    return
  }

  var lowercase = window.confirm("Would you like to include lowercase letters?")
  var uppercase = window.confirm("Would you like to include uppercase letters?")
  var numbers = window.confirm("Would you like to include numbers?")
  var symbols = window.confirm("Would you like to include symbols?")

  var characters = []
  
  if (lowercase) {
    characters = characters.concat (lowercaseArray)
  }

  if (uppercase) {
    characters = characters.concat (uppercaseArray)
  }

  if (numbers) {
    characters = characters.concat (numberArray)
  }

  if (symbols) {
    characters = characters.concat (symbolArray)
  }
 
  for (var i = 0; i < passwordLength; i++){
    var randomCharacter = Math.floor(Math.random() * characters.length)
  }
}


//loop through the arrray and get random value to build password







//event listener, button

generateBtn.addEventListener("click", generatePassword);
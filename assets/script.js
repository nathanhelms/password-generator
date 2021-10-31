// @ts-check

// Assignment code here


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//Array of lowercase letters

var lowercaseArray = 
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Array of uppercase letters

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//Array of numbers 

var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

//Array of special characters

var characterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"]

// Write password to the #password input

function writePassword(x, y) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = parseInt(prompt("How long do you want your password to be?"))

  if (passwordLength <8 || passwordLength >128) {
    window.alert("Password length must be between 8 and 128")
    return
  }
  
  passwordText.value = password;

  
}






//loop through the arrray and get random value to build password

for (var i = 0; i < )





//event listener, button

var generateBtn = document.querySelector("#generate");
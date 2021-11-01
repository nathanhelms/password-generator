//generate button

var generateBtn = document.querySelector("#generate");

//character arrays

var lowercaseArray = 
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"]





//password generator 

function generatePassword() {

  var passwordLength = parseInt(prompt("How long do you want your password to be?"))

  if (passwordLength <8 || passwordLength >128) {
    alert("Password length must be between 8 and 128. Please try again.")
    return
  }

  var lowercase = window.confirm("Would you like to include lowercase letters?")
  var uppercase = window.confirm("Would you like to include uppercase letters?")
  var numbers = window.confirm("Would you like to include numbers?")
  var symbols = window.confirm("Would you like to include symbols?")

  var characters = []
  
  if (lowercase) {
    characters = characters.concat(lowercaseArray) //how does this combine the arrays? does concat take every array in the doc?
  }

  if (uppercase) {
    characters = characters.concat(uppercaseArray)
  }

  if (numbers) {
    characters = characters.concat(numberArray)
  }

  if (symbols) {
    characters = characters.concat(symbolArray)
  }

  var passwordString = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length)

    var randomCharacter = characters[randomIndex]

    passwordString = passwordString + randomCharacter
    console.log("passwordString: ", passwordString);
  }

  return passwordString
}






function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.innerHTML = password;
}

//event listener
generateBtn.addEventListener("click", writePassword);
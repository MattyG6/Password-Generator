// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
var random = Math.random()
  return Math.floor(min*(1 - random) + (random*max))
}
function getRandomItem(list) {
  return list[randomInt(list.length)]
}



function generatePassword(ThisIsPasswordLength) {
  var userInput = window.prompt("Give a number value between 8 and 128 for password length");
  
  var passwordLength = parseInt(userInput);
  //*parseInt is like parse string for integers*//

  if (isNaN(passwordLength)) {
    window.alert("That's not a valid number")
    return
  };
  //*return makes function go back to beginning*//

  if (passwordLength < 8 || passwordLength > 128 ) {
    window.alert("Password length must be between 8 and 128 characters")
    return
  };

  var userSelectsNumbers = window.confirm("Would you like to include numbers in your password?");
  //*user selecting ok creates true boolean, user selecting cancel creates false boolean*//
  var userSelectsSymbols = window.confirm("Would you like to include symbols (!,@,#, ... ) in your password?");
  var userSelectsLowercase = window.confirm("Would you like to include lowercase letters in your password?");
  var userSelectsUppercase = window.confirm("Would you like to include uppercase letters in your password?");
  
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["`", "!", "@", "#", "$", "%", "^", "&", "*", " ", "-", "_"]
  var lowercaseLettersList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
  var uppercaseList = []

  var Selection = []
  //*empty [] indicates it's an array*//


  for (var i = 0; i < lowercaseLettersList.length; i++) {
  uppercaseList[i] = lowercaseLettersList[i].toUpperCase()
  }

  if (userSelectsNumbers === true) {
  Selection.push(numberList)
  }

  if (userSelectsSymbols === true) {
    Selection.push(symbolList)
  }

  if (userSelectsLowercase === true) {
    Selection.push(lowercaseLettersList)
  }

  if (userSelectsUppercase === true) {
    Selection.push(uppercaseList)
  }

  if (Selection.length === 0) {
    Selection.push(symbolList)
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(Selection)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }
  
  console.log(generatedPassword)


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

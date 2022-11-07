// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(ThisIsPasswordLength) {
  var userInput = window.prompt("Give a number value between 8 and 128 for password length")
  
  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("That's not a valid number")
    return
  }

  if (passwordLength < 8 || passwordLength > 128 ) {
    window.alert("Password length must be between 8 and 128 characters")
    return
  }

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

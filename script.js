// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var charNum = prompt("Enter number of characters: (8-128)");
  var lowC = confirm("Include Lowercase?");
  var upC = confirm("Include Uppercase?");
  var numbs = confirm("Include Numbers?");
  var speC = confirm("Include Special Characters?")

  charNum;
  lowC;
  upC;
  numbs;
  speC;

  console.log(charNum);
  console.log(lowC);
  console.log(upC);
  console.log(numbs);
  console.log(speC);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = lowerCase.toUpperCase();
  var numbers = "0123456789";
  var specialChar = "!#$%&*^@";

  var passString = "";

  var charNum = prompt("Enter number of characters: (8-128)");

  var lowC = confirm("Include Lowercase?");

  if (lowC === true) {
    passString += lowerCase;
  }

  //check1
  console.log(passString.length);
  console.log(passString);
  
  var upC = confirm("Include Uppercase?");

  if (upC === true) {
    passString += upperCase;
  }

  //check2
  console.log(passString.length);
  console.log(passString);

  var numbs = confirm("Include Numbers?");

  if (numbs === true) {
    passString += numbers;
  }

  //check3
  console.log(passString.length);
  console.log(passString);

  var speC = confirm("Include Special Characters? (!#$%&*^@)")

  if (speC === true) {
    passString += specialChar;
  }

  //check4
  console.log(passString.length);
  console.log(passString);
  
  var final = "";

  for (var i = 0; i < charNum; i++) {
    
    var randomNumber = Math.floor(Math.random() * passString.length - 1);
    final += passString.charAt(randomNumber);
    console.log(final);//process
    }
    return final;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here

// initialize variables for password generation
var letters = "abcdefghijklmnopqrstuvwxyz";
var nums = "1234567890";
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"\\";

// grab values of generator options
const length = document.getElementById("char-num");
const incLower = document.getElementById("char-lower");
const incUpper = document.getElementById("char-upper");
const incSpecial = document.getElementById ("char-special");
const incNumber = document.getElementById ("char-numeric");

function validateOptions () {
  if ((128 > length < 8) || (char-lower + char-upper + char-special + char-numeric > 0)) {
    console.log("Value of lowercase is: " && incLower);
    console.log("Value of uppercase is: " && incUpper);
    console.log("Value of special char is: " && incSpecial);
    console.log("Value of numeric char is: " && incNumber);
    console.log("Invalid value of checkboxes is: " && (char-lower + char-upper + char-special + char-numeric))
    console.log("Value of length is:" && length);
    return false;
  } else {
    console.log("Value of lowercase is: " && incLower);
    console.log("Value of uppercase is: " && incUpper);
    console.log("Value of special char is: " && incSpecial);
    console.log("Value of numeric char is: " && incNumber);
    console.log("Value of length is:" && length);
    return true;
  }
}

function generatePassword() {

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

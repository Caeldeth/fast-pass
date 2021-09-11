// Assignment code here

// initialize variables for password generation
const letters = "abcdefghijklmnopqrstuvwxyz";
const nums = "1234567890";
const special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"\\";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // use var grab values of generator options on each click
  var passLen = document.getElementById("input-len").value;
  var incLower = document.getElementById("check-lower").checked;
  var incUpper = document.getElementById("check-upper").checked;
  var incSpecial = document.getElementById("check-special").checked;
  var incNumber = document.getElementById("check-numeric").checked;

  // use const for error messages as they are not changing
  const optionsError1 =
    "You selected a password length of " +
    length +
    ".  Passwords must be between 8 and 128 characters.  Additionally, You must select at least one type of character (Upper Case, Lower Case, Numeric, Special) to include.";
  const optionsError2 =
    "You selected a password length of " +
    length +
    ".  Passwords must be between 8 and 128 characters.";
  const optionsError3 =
    "You must select at least one type of character (Upper Case, Lower Case, Numeric, Special) to include.";

  // do error checking in variables to save typing
  var lenValue = passLen > 7 && passLen < 129 ? "valid" : "invalid";
  var checkBoxSum =
    incLower === true ||
    incUpper === true ||
    incSpecial === true ||
    incNumber === true
      ? "valid"
      : "invalid";

  console.log("Value of lowercase is: " + incLower);
  console.log("Value of uppercase is: " + incUpper);
  console.log("Value of special char is: " + incSpecial);
  console.log("Value of numeric char is: " + incNumber);
  console.log("Value of length is: " + passLen);
  console.log("lenValue is: " + lenValue);
  console.log("checkBoxSum is: " + checkBoxSum);

  if (lenValue === "invalid" && checkBoxSum === "invalid") {
    console.log("Error1 was called");
    window.alert(optionsError1);
  } else if (lenValue === "invalid" && checkBoxSum === "valid") {
    console.log("Error2 was called");
    window.alert(optionsError2);
  } else if (lenValue === "valid" && checkBoxSum === "invalid") {
    console.log("Error3 was called");
    window.alert(optionsError3);
  } else {
    var passChars = "";
    incLower ? (passChars += letters) : "";
    incUpper ? (passChars += letters.toUpperCase()) : "";
    incSpecial ? (passChars += special) : "";
    incNumber ? (passChars += nums) : "";
    
    var password = generatePassword(passChars, passLen);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

function generatePassword(passChars, passLen) {
  console.log("Success was called");
  console.log("Characters are " + passChars);
  console.log("Passed Length is? " + passLen);

  let password = "";
  for (let i = 0; i < passLen; i++) {
    password += passChars.charAt(Math.floor(Math.random() * passChars.length));
  }
  console.log("Password is " + password);
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// initialize global variables for password generation - they aren't changing so use const
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
    passLen +
    ".  Passwords must be between 8 and 128 characters.  Additionally, You must select at least one type of character (Upper Case, Lower Case, Numeric, Special) to include.";
  const optionsError2 =
    "You selected a password length of " +
    passLen +
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

  // add console output to validate variables are behaving appropriately
  console.log("Value of lowercase is: " + incLower);
  console.log("Value of uppercase is: " + incUpper);
  console.log("Value of special char is: " + incSpecial);
  console.log("Value of numeric char is: " + incNumber);
  console.log("Value of length is: " + passLen);
  console.log("lenValue is: " + lenValue);
  console.log("checkBoxSum is: " + checkBoxSum);

  // use if/then statement to validate possible failure cases.  on success, pass to password generator function.  On failure, yell at user to read 
  // the instructions and HELPFUL TOOLTIPS.  Log result to console to verify correct error message is firing
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
    // build data set for password characters
    var passChars = "";
    incLower ? (passChars += letters) : "";
    incUpper ? (passChars += letters.toUpperCase()) : "";
    incSpecial ? (passChars += special) : "";
    incNumber ? (passChars += nums) : "";
    
    // pass created letter set and captured password length to generator function
    var password = generatePassword(passChars, passLen);
    // add password to output html
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

function generatePassword(passChars, passLen) {
  //small celebrations are great - it worked
  console.log("Success was called");
  //validate the character data set
  console.log("Characters are " + passChars);
  //validate the desired length is passed correctly
  console.log("Passed Length is? " + passLen);

  //simple for loop to generate password.  Note that a typo of "+-"" is not the same as "+="", causing an hour of headaches
  let password = "";
  //for loop is slightly modified from https://w3collective.com/random-password-generator-javascript/ .  If it's not broke, don't fix it
  for (let i = 0; i < passLen; i++) {
    password += passChars.charAt(Math.floor(Math.random() * passChars.length));
  }
  //validate password is actually building (see above headache on +-)
  console.log("Password is " + password);
  //send password back to main function to 
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code

//spec character array
var specChar = "!@#$%^&*()_-+={}[]/|,.<>/?".split("");
// number array
var numbArray = "123456789".split("");
// lower case array
var lowerCase = "abcdefghjklmnopqrstuvwxyz".split("");
// upper case array 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var choice = {};

// var to store length of password
var wordLength = function () {
  var length = window.prompt("How many charcters would you like your password to be?");

  //conditional to check if parse is a number 
  if (Number.isNaN(length)) {
    alert("Password must be a number");
    return;
  }

  var special = window.prompt("Do you want to use special charcaters (such as *&@#?$/...) Yes or No");

  if (special !== "Yes" && special !== "No") {
    alert("Please enter Yes or No");
    return;
  }
  else if (special === "Yes") {
    choice.specChar = specChar;
  }

  var upper = window.prompt("Do you want to use uppercase letters Yes or No");

  if (upper !== "Yes" && upper !== "No") {
    alert("Please enter Yes or No");
    return;
  }
  else if (upper === "Yes") {
    choice.upperCase = upperCase;
  }

  var lower = prompt("Do you want to use lowercase letters Yes or No");

  if (lower !== "Yes" && lower !== "No") {
    alert("Please enter Yes or No");
    return;
  }
  else if (lower === "Yes") {
    choice.lowerCase = lowerCase
  }


  var number = prompt("Do you want to use numbers Yes or No");

  if (number !== "Yes" && number !== "No") {
    alert("Please enter Yes or No");
    return;
  }
  else if (number === "Yes") {
    choice.numbArray = numbArray
  }

  return options;

};
wordLength();

//other code before this


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

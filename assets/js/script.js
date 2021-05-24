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

  if (length > 128) {
    alert("Password must be less than 128 characters");
    return;
  }

  if (length < 8) {
    alert("Password must be longer than 8 characters");
    return;
  }

  //conditional to check if parse is a number 
  if (Number.isNaN(length)) {
    alert("Password must be a number");
    return;
  }

  var special = window.prompt("Do you want to use special charcaters (such as *&@#?$/...) yes or no");

  if (special !== "yes" && special !== "no") {
    alert("Please enter yes or no");
    return;
  }
  else if (special === "yes") {
    choice.specChar = specChar;
  }

  var upper = window.prompt("Do you want to use uppercase letters yes or no");

  if (upper !== "yes" && upper !== "no") {
    alert("Please enter yes or no");
    return;
  }
  else if (upper === "yes") {
    choice.upperCase = upperCase;
  }

  var lower = prompt("Do you want to use lowercase letters yes or no");

  if (lower !== "yes" && lower !== "no") {
    alert("Please enter yes or no");
    return;
  }
  else if (lower === "yes") {
    choice.lowerCase = lowerCase
  }


  var number = prompt("Do you want to use numbers yes or no");

  if (number !== "yes" && number !== "no") {
    alert("Please enter yes or no");
    return;
  }
  else if (number === "yes") {
    choice.numbArray = numbArray
  }

  return choice;

};
wordLength();

function randomChar (array) {
  var random = Math.floor(Math.random() * array.length);
  var randChoice = array[random];
}



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code

//spec character array
var specChar = "!@#$%^&*()_-+={}[]/|,.<>/?".split("");
// number array
var numbArray = "123456789".split("");
// lower case array
var lowerCase = "abcdefghjklmnopqrstuvwxyz".split("");
// upper case array 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");



// var to store length of password
function myPass() {
  var choice = {};

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


function randomChar (array) {
  var random = Math.floor(Math.random() * array.length)
  var rando = array[random]

  return rando;
}

function passgen() {

var choice = myPass();
var final =[];
var potentialCharacters = [];

if(choice.specChar) {
  potentialCharacters = potentialCharacters.concat(specChar)
}
if(choice.numbArray) {
  potentialCharacters = potentialCharacters.concat(numbArray)
}
if(choice.upperCase) {
  potentialCharacters = potentialCharacters.concat(upperCase)
}
if(choice.lowerCase) {
  potentialCharacters = potentialCharacters.concat(lowerCase)
}

 for (let i = 0; i < choice.length; i++) {
  final[i] = randomChar(potentialCharacters)
 }
final = final.join("")
return final;
}



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passgen();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(writePassword)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

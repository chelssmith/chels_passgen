// Assignment Code

//spec character array
var specChar = "!@#$%^&*()_-+={}[]\|,.<>/?".split("");

// number array
var numbArray = "123456789".split("");

// lower case array
var lowerCase = "abcdefghjklmnopqrstuvwxyz".split("");

// upper case array 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function userPrompt() {
  var options = {};

  // var to store length of password
  var length = parseInt(
    prompt("How many charcters would you like your password to be?"));
  length = parseInt(length);

  //conditional to check if parse is a number 
  if (Number.isNaN(length)) {
    alert("Password must be a number");
    return null;
  }

  // at least 8 characters conditional  
  if (length < 8) {
    alert("Password length must be 8 characters");
    return null;
  }

  // at most 128 character conditional
  if (length > 128) {
    alert("Password must not contain more than 128 characters");
    return null;
  }

  options.length = length ;

  var special = prompt(
    "Do you want to use special charcaters (such as *&?$/...) Yes or No"
  );

  special = special.toUpperCase ();

  if (special !== "Yes"  && special !== "No") {
    alert("Please enter Yes or No");
    return null;
  } 
    else if (special === "Yes"){
      options.specChar = specChar;
    }

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
}

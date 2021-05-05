// Assignment Code
// spec char array
var specialChars = [",". "#"];

// number array
var numbArray = ["1", "2"];

// lowercase array
var lowerCase = ["a", "b"];

// upper case array look up split method
var upperCase = ["KJDFHKSJDFH"].split();


// function to prompt the user for password options
  // create a variable to store the length of password 
  var length = parseInt (
    prompt("how many charcters would u like your password to be?")
  )

  // creat conditional to check if pass is actually a number
  if (Number.isNaN(length) {
    alert("password must be a number");
    return null;
  };

  // condtional state to check if at least 8 characters
  if (length < 8) {
    alert("password length must be at least 8 charcters");
    return null;
  };

  // condtional statement to check if password length is atleast 128 characters
  if (length > 128) {
    alert("password length cannot contain more than 128 charcters");
    return null;
  };


  // creat confirmation prompts for the type of characters the user wants to use in their password

  // need to create a conditional statement to check if user inlcuded ATLEAST 1 charac type. return user back to start of application

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

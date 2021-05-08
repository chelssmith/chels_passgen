// Assignment Code

//spec character array
var specChar = [",", "." , "<", ">", "/", "?", "'", ";", ":","[", "]", "{", "}", "|", "`" , "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+"];

// number array
var numbArray = ["1","2","3","4","5","6","7","8","9","0"];

// lower case array
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// upper case array 
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// var to store length of password
var length = parseInt (
  prompt("How many charcters would you like your password to be?")
)

//conditional to check if parse is a number 
if (Number.isNaN(length)) {
  alert("Password must be a number");
  return;
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


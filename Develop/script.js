// Assignment Code
var generateBtn = document.querySelector("#generate");

var charLow = "abcdefghijklmnopqrstuvwxyz";

var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numChar = "1234567890";

var specialChar = [
  "/u0021",
  "/u0022",
  "/u0023",
  "/u0024",
  "/u0024",
  "/u0025",
  "/u0026",
  "/u0027",
  "/u0028",
  "/u0029",
  "/u002A",
  "/u002B",
  "/u002C",
  "/u002D",
  "/u002E",
  "/u002F",
  "/u003A",
  "/u003B",
  "/u003C",
  "/u003D",
  "/u003F",
  "/u0040",
  "/u005B",
  "/u005C",
  "/u005D",
  "/u005E",
  "/u005F",
  "/u0060",
  "/u007B",
  "/u007C",
  "/u007D",
  "/u007E"

]

function generatePassword() {
var passwordLength;
var upperChar;
var LowerChar;
var charSpecial;
var charNum;
var charList = "";

 do (passwordLength = parseInt(promt("Choose how many characters, from 8 to 128, you want your password to have. "))


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

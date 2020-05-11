// Assignment Code
var generateBtn = document.querySelector("#generate");

var charLow = "abcdefghijklmnopqrstuvwxyz";

var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numChar = "1234567890";

var specialChar =
"\u0021\u0022\u0023\u0024\u0024\u0025\u0026\u0027\u0028\u0029\u002A\u002B\u002C\u002D\u002E\u002F\u003A\u003B\u003C\u003D\u003F\u0040\u005B\u005C\u005D\u005E\u005F\u0060\u007B\u007C\u007D\u007E";
;

//generates password list
function generatePassword() {
var passwordLength;
var upperChar;
var lowerChar;
var charSpecial;
var charNum;
var charList = "";

//prompt user to input character length, make sure they put in a valid number
 passwordLength = parseInt(prompt("Choose how many characters, from 8 to 128, you want your password to have. "));
    if (passwordLength == "undefiend" || Number.isNaN(passwordLength)) {
      alert("You need to put in a number!")
      return;
    }
    if (passwordLength < 8 || passwordLength > 128) {
      alert("The password length can only be from 8 to 128 characters long!")
      return;
  }
 upperChar = confirm("Would you like upper cased letters in your password?");
 lowerChar = confirm("Would you like lower cased letters in your password?");
 charSpecial = confirm("Would you like special characters in your password?");
 charNum = confirm("Would you like numbers in your password?");

    if(upperChar == false && lowerChar == false && charSpecial == false && charNum == false){
    alert("You need to pick at least one option! Try again!!")
    return;
    }

    if(upperChar) {
      charList += charUp;
    }
    if(lowerChar) {
      charList += charLow;
    }
    if(charSpecial) {
      charList += specialChar;
    }
    if(charNum) {
      charList += numChar;
    }
    return randomizeList(passwordLength, charList);
}

function randomizeList(passwordLength, charList){
  var password = "";

  for(i = 0; i < passwordLength; i++) {
    password += charList[Math.floor(Math.random() * (charList.length))];
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

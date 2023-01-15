// Assignment Code
var generateBtn = document.querySelector("#generate");
var allowedCharacters = [""]
var passLength = ""
var somethingAdded = false
var checksCompleted = false
var validLength;
var allGood = true
var charList;

function specialCharacters() {
  if (window.confirm("Special characters?")) {
    allowedCharacters.push(" ", "!", '"', "#", "$", "%", "&", "'", "*", "+", ",", "-", ".", "/", ":", "<", "=", ">", "?", "@", "[", "(", ")", "]", "^", "_", "`", "{", "|", "}", "~");
    somethingAdded = true;
  } 
}

function allowNumbers() {
  if (window.confirm("Numbers?")) {
    for (let i = 0; i < 10; i++) {
      allowedCharacters.push(i);
    }
    somethingAdded = true;
  } 
}

function allowLowercase() {
  if (window.confirm("Lowercase letters?")) {
    allowedCharacters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    somethingAdded = true;
  }
}

function allowUppercase() {
  if (window.confirm("Uppercase letters?")) {
    allowedCharacters.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    somethingAdded = true;
    
  }
}

function passwordLength() {
  let i = prompt("Please choose a length between 8 and 128 characters");
  if (isNaN(i) || i < 8 || i > 128) {
    validLength = false;
  } else {
    passLength = i;
    validLength = true;
  }
}

function generatePassword() {
  passwordLength();
  if(validLength == false) {
    allGood = false;
    return
  } else {
    allGood = true;
  allowUppercase();
  allowLowercase();
  allowNumbers();
  specialCharacters();
  
  var functionResult = '';
  let charList = allowedCharacters.join("");
  // console.log(charList); - Used this for testing, don't want to delete it just in case I want to play with the code some more.
  for (var i = 0; i < passLength; i++) {
    var rnum = Math.floor(Math.random() * charList.length);
    functionResult += charList.substring(rnum, rnum+1);
  }
  }
  return functionResult;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if(allGood == false) {
    alert("You must choose a number between 8 and 128. Try again");
    password = "Please try again!";
  } else if (somethingAdded == false) {
    alert("You must select at least one character type");
    password = "You must select at least one character type"
  } else {
    //do nothing
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //resets the array, allowing the program to work multiple times without requiring a refresh
  allowedCharacters = [""];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

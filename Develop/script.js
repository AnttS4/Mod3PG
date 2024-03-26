// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", ()=> generatePassword);

// Function to generate password
function getlength() {
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");
  length = parseInt(length);

  if (Number.isNaN(length) || length < 8 || length > 128) {
    alert("Invalid length! Please enter a number between 8 and 128.");
    return null;
  }
  return length;
}
function generatePassword(length) {
  if (!length) return null;
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
    alert("At least one character type must be selected!");
    return;
  }

  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numericChars = '0123456789';
  var specialChars = '!@#$%^&()-_+=/?';

  var allowedChars = [];
  if (includeLowercase) allowedChars += lowercaseChars;
  if (includeUppercase) allowedChars += uppercaseChars;
  if (includeNumbers) allowedChars += numericChars;
  if (includeSpecialChars) allowedChars += specialChars;
  var password= "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars.charAt(randomIndex);
  }
  return password;
}
// Write password to the #password input
function writePassword() {
  var length = getlength();
  var password = generatePassword(length);
  console.log("password", password)
  var passwordText = document.querySelector("#password");
  console.log("passwordText", passwordText)
  passwordText.value = password;
  console.log(length);
}
generateBtn.addEventListener("click", writePassword);
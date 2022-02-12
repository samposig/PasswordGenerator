//global variables
var generateBtn = document.querySelector("#generate");

var alphabetslower = "abcdefghijklmnopqrstuvwxyz";
var alphabetsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special  = "!@#$%^&*_-+=";
var everything = "";

function writePassword() {
  var passwordpassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordpassword;
}
// adds event click to the button generate
generateBtn.addEventListener("click", writePassword);

// when button generate is click user is given the following prompts
function generatePassword() {
  var password = "";
  //user is given prompt to enter desired length of password
  var passwordLength = prompt("Enter length of desired Password");
  // if the amount entered is between 8 and 128 function will go to next prompt, if not user will be given an alert to enter proper amount
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password: Must be more than 8 and less than 128");
    generatePassword();
  }
  // after user enter correct ammount of characters, they will be given yes or no prompts if they would like upper case, lower case, numbers, or special characters in their password
  var upper_case = prompt("Would you like to add upper case characters to passworord?(Answer yes or no)");
  
  if (upper_case === "yes") {
    everything += alphabetsUpper
    //user will be asked to confirm their choice is they select not to use upper, lower, or special characters
  } else {
    var upperconfirm = prompt("Are you sure?");
    if (upperconfirm === "yes") {
      var upper_case = prompt("Would you like to add upper case characters to passworord?(Answer yes or no)"); 
      everything += alphabetsUpper
    }
  }
  var lower_Case = prompt("Would you like to add lower case characters to passworord?(Answer yes or no)");
  if (lower_Case === "yes") {
    everything += alphabetslower
  } else {
    var lowerconfirm = prompt("Are you sure?");
    if (lowerconfirm === "yes") {
      var lower_Case = prompt("Would you like to add lower case characters to passworord?(Answer yes or no)"); 
      everything += alphabetslower
    }
  }
  var character_at = prompt("Would you like to add characters to passworord?(Answer yes or no)");
  if (character_at === "yes") {
    everything += special
  } else {
    var character1 = prompt("Are you sure?");
    if (character1 === "yes") {
      var character_at = prompt("Would you like to add lower case characters to passworord?(Answer yes or no)"); 
      everything += special
    }
  var numbers_at = prompt("Would you like to add numbers to passworord?(Answer yes or no)");
  if (numbers_at === "yes") {
    everything += numbers
  }
//for loop to create a random password with desired length and characters of users choice
for (var i=0; i < passwordLength; i++){
  password += everything.charAt( Math.floor(Math.random() * everything.length));
}
//allows user to create another password
return password;
}
}

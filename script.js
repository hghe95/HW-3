// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Variables for criteria
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "/", "<", ">", "?", ":", ";"];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}


function generatePassword() {
    var includedChars = []
    // Prompting the user which criteria they want. Ones they don't want are left out
    var shouldLowerCase = prompt("Would you like lowercase letters? Enter Yes or No. ");
    if (shouldLowerCase == "Yes") {
      includedChars.push(lowerCase.join(''));
    }else if(shouldLowerCase == "No") {
      console.log("No lower case letters!");
    }else {
      alert("Please type in Yes or No.")
      return ""
    }

    var shouldUpperCase = prompt("Would you like uppercase letters? Enter Yes or No. ");
    if (shouldUpperCase == "Yes") {
        includedChars.push(upperCase.join(''));
    }else if(shouldUpperCase == "No") {
      console.log("No upper case letters!");
    }else {
      alert("Please type in Yes or No.")
      return ""
    }

    var shouldNumbers = prompt("Would you like numbers? Enter Yes or No. ");
    if (shouldNumbers == "Yes") {
        includedChars.push(numbers.join(''));
    }else if(shouldNumbers == "No") {
      console.log("No numbers!");
    }else {
      alert("Please type in Yes or No.")
      return ""
    }

    var shouldSpecialChars = prompt("Would you like special characters? (ie !, @, #, $, %) Enter Yes or No. ");
    if (shouldSpecialChars == "Yes") {
        includedChars.push(specialChars.join(''));
    }else if(shouldSpecialChars == "No") {
      console.log("No special characters!");
    }else {
      alert("Please type in Yes or No.")
      return ""
    }

    //Failsafe to make sure that at least one of the criteria is chosen
    if (includedChars.length === 0) {
      alert("You must select at least one criteria!");
      return ""
    } 

    // Asking the user the length of the password
    let passwordLength = prompt("How long would you like the password to be? Please respond in a number that is between 8 and 128. ");
    passwordLength = parseInt(passwordLength);
    if (passwordLength < 8){
      alert("Password must be at least 8 characters, please enter another number. ");
      return ""
    } else if (passwordLength > 128) {
      alert("Password must be no more than 128 characters, please enter another number. ");
      return ""
    }

    //Formation of the password
    var password = "";
    var chars = includedChars.join("")
    console.log(includedChars)
    console.log(passwordLength)

    //For loop is created to return the password based on the character length specified by the user
    for (var i = 0; i < passwordLength; i++) {
      password += chars[Math.floor( Math.random() * chars.length)];
      console.log(includedChars[Math.floor( Math.random() * includedChars.length)])
    }
    return password
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


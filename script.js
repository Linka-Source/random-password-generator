// Assignment Code
function generatePassword(){
  var allNumbers = '1234567890'.split('')
  var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var specialCharacters = '~!@#$%^&*()_+'.split('');
  var finalPasswordCharacters = [];
  var password = '';
//created arrays

  var passwordLength = prompt("Enter desired password length");
  passwordLength = parseInt(passwordLength);
  var generateNumbers = confirm("Include numbers?");
  var generateUpperCase = confirm("Include uppercase letters?");
  var generateLowerCase = confirm("Include lowercase letters?");
  var generateSpecialCharacters = confirm("Include special characters?");
//created prompts


//if password is greater that 8 and less than 128 then we want to confirm statements uppercase, lowercase, numbers, characters
  
  if (generateNumbers){
    finalPasswordCharacters = finalPasswordCharacters.concat(allNumbers)
  }
    
  if (generateUpperCase){
    finalPasswordCharacters = finalPasswordCharacters.concat(upperCaseLetters)
  }

  if (generateLowerCase){
    finalPasswordCharacters = finalPasswordCharacters.concat(lowerCaseLetters)
  }

  if (generateSpecialCharacters){
    finalPasswordCharacters = finalPasswordCharacters.concat(specialCharacters)
  }

//if they select a number not within range (less than 8 and more than 128)

  if (passwordLength >8 && passwordLength <128) {
    for (let index = 0; index < passwordLength; index++) {
    
      var randomIndex = Math.floor(Math.random() 
                  * finalPasswordCharacters.length + 1); 
        
      password += finalPasswordCharacters[randomIndex]
    }

    return password;
  } else {
    alert("Password length not within parameters. Please pick number between 8 and 128 😉");
  return '';
  }


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn = document.querySelector("#generate")
generateBtn.addEventListener("click", writePassword);

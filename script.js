///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen

//I choose lowercase, uppercase, numeric, and/or special characters


function generatePassword(){
    let specials =  " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    let hasSpecial = false;
    let hasLower = false;
    let hasUpper = false;
    let hasNumeric = false;
    let len = 0;
    while (!(hasLower||hasUpper||hasSpecial||hasNumeric)){
      alert("You have to answer yes for at least one of following question")
      hasLower = confirm("contains lowercase?");
      hasUpper = confirm("contains uppercase??");
      hasSpecial = confirm("contains special symbols?");
      hasNumeric = confirm("contains digits?");
    }
    while ((!typeof(len)==='number')||(len<8)||(len>128)){
      len = prompt("input password length between 8 and 128");
    }
  /// now we have all reqs and len ready
    let numSpecial = hasSpecial? 1 : 0;
    let numLower = hasLower? 1:0;
    let numUpper = hasUpper? 1:0;
    let numNumeric = hasNumeric? 1:0;

    if (hasSpecial){

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

//////////////////////////////////////////////////////////////////////

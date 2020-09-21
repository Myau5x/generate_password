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

function randInt(N){
  /// random integer between 0 and N ( less than N, max N-1)
  return Math.floor(Math.random()*N);
}

function generatePassword(){
    let specials =  " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let digit = "0123456789";
    let alls = ""
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
    let password = "";
    let beg = 0;
    if (hasUpper){
      alls = alls + upper;
      password = password + upper[randInt(upper.length)];
      console.log(alls);
      beg = beg+1;
    }
    if (hasLower){
      alls = alls + lower;
      password = password + lower[randInt(lower.length)];
      console.log(alls);
      beg++;
    }
    if (hasNumeric){
      alls = alls + digit;
      password = password + digit[randInt(digit.length)];
      console.log(alls);
      beg++;
    }
    if (hasSpecial){
      alls = alls + specials;
      password = password + specials[randInt(specials.length)];
      console.log(alls);
      beg++;

    }
    console.log("===============");
    console.log(password);
    for (var i =beg; i <len; i++ ){
      password = password+alls[randInt(alls.length)]
    }

    return password;
    
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

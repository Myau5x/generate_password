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
    let pass_array = [];
    let beg = 0;
    if (hasUpper){
      alls = alls + upper;
      let new_letter = upper[randInt(upper.length)];
      //password = password + new_letter
      console.log(alls);
      pass_array[beg]= new_letter;
      beg = beg+1;
      
    }
    if (hasLower){
      alls = alls + lower;
      new_letter = lower[randInt(lower.length)];
      //password = password + new_letter;
      console.log(alls);
      pass_array[beg]= new_letter;
      beg++;
    }
    if (hasNumeric){
      alls = alls + digit;
      new_letter = digit[randInt(digit.length)];
      //password = password + new_letter;
      console.log(alls);
      pass_array[beg]= new_letter;
      beg++;
    }
    if (hasSpecial){
      alls = alls + specials;
      new_letter = specials[randInt(specials.length)];
      //password = password + new_letter;
      console.log(alls);
      pass_array[beg]= new_letter;
      beg++;

    }
    console.log("===============");
    //console.log(password);
    for (var i =beg; i <len; i++ ){
      new_letter = alls[randInt(alls.length)]
      //password = password+ new_letter
      pass_array[i] = new_letter
    }
    console.log(pass_array);
    /// swap 1st 4 
    for (var i=0; i<4; i++){
      let temp = 0;
      let new_index = randInt(len);
     // console.log(i);
      temp = pass_array[new_index];
      pass_array[new_index]=pass_array[i]
      pass_array[i]=temp
    }
    console.log(pass_array);
    for (var i =0; i<pass_array.length;i++){
      password = password+pass_array[i];
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

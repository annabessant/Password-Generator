// Password Generator: 10 characters but no more than 64

    // Four character types options
    var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
    var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Counters
i=0;
j=0;

    // Function to prompt user for password options
function getPasswordOptions() {
// Password length prompt
var passwordLength = parseInt(window.prompt("How long do you want your password to be? Please select from min 10 to max 64 characters!","Select the password length, e.g. '12'"));
// Password length validation
while (!(parseInt(passwordLength)>=10 && parseInt(passwordLength)<=64)){
  passwordLength = parseInt(window.prompt("Your selection was incorrect! Please tery again!How long do you want your password to be?Please select from min 10 to max 64 characters!","Select the password length, e.g. '12'"));
}
}

console.log('Password lemgth: ',passwordLength);

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
var generatedPassword = '';
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
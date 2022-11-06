const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const CapLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '@', "#", '%', '&', '*', '?', '^', '+', '='];

var selectedChar = ['']
var Password = [''];
console.log(selectedChar)

function RandomIndex(a, b) {
    for (i = 0; i < a; i++) {
        const randomSelection = Math.floor(Math.random() * b.length);
        var selected = b[randomSelection];
        Password.push(selected);
    }
}

function checkChar() {
    var numOfChar = window.prompt("How many character would you like in your password?")
    if (numOfChar < 8) {
        window.alert('You must have a minimum of 8 characters in your password!');
        var result = checkChar();
        return result;
    }
    else if (isNaN(numOfChar)) {
        window.alert("You must select a number");
        var result = checkChar();
        return result;
    }
    else if (numOfChar > 128) {
        window.alert("You cannot have more than 128 characters in your password");
        var result = checkChar();
        return result;
    }
    else {
        return numOfChar;
    }

}


function shuffle(Password) {
    let currentIndex = Password.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [Password[currentIndex], Password[randomIndex]] = [Password[randomIndex], Password[currentIndex]];
    }
    return Password;
}

function charactertype(a, b) {
    var answer = window.prompt('Would you like ' + a + ' in your password? Enter Yes or No)?')
    var lanswer = answer.toLocaleLowerCase();
    console.log(lanswer)
    if (lanswer == 'yes') {
        selectedChar = selectedChar.concat(b);

    }
    else if (lanswer == 'no') {
       null;
    }
    else if (lanswer !=='yes'||'no'){
        window.alert('Please enter Yes or No')
        
    }
}


function writePassword() {
    Password = Password.splice();
    var numOfChar = checkChar();

    charactertype("lower case  letters", letters);
    charactertype("upper case letters", CapLetters);
    charactertype('numbers', numbers);
    charactertype('symbols', symbols);

    var shuffledChar = shuffle(selectedChar);
    console.log(shuffledChar)
    RandomIndex(numOfChar, shuffledChar);
    console.log(numOfChar);
    var shuffledPassword = shuffle(Password);
    var finalPassword = shuffledPassword.join('');

    var passwordText = document.querySelector('#password');
    passwordText.value = finalPassword;
}
var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener("click", writePassword);



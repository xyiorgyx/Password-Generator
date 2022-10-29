var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var CapLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['!', '@', "#", '%', '&', '*', '?', '^', '+', '='];

var Password = [''];

window.alert("Hello!, and welcome to the random password generator!")

function RandomIndex(a, b) {
    for (i = 0; i < a; i++) {
        const randomSelection = Math.floor(Math.random() * b.length);
        var selected = b[randomSelection];
        Password.push(selected);
    }
}

function minCheck(a, b) {
    var answer = window.prompt('How many ' + a + ' would you like in your password? (Min: ' + b + ')');
    var isNotinteger = isNaN(answer)
    console.log(isNotinteger)
    if (answer < b) {
        window.alert('You must have a minimum of ' + b + ' ' + a + ' in your password!');
        var result = minCheck(a, b);
        return result;
    }
    else if (isNotinteger == true){
        window.alert("You must select a number");
        var response = minCheck(a, b);
        return response;
    }
    else {
        return answer;
    }
}

var NumOfLetters = minCheck('lower case letters', 8)
RandomIndex(NumOfLetters, letters);
var NumofCapitaletters = minCheck('capital letters', 4)
RandomIndex(NumofCapitaletters, CapLetters);
var NumOfSymbols = minCheck('numbers', 2)
RandomIndex(NumOfSymbols, symbols);
var NumOfNumbers = minCheck('symbols', 2)
RandomIndex(NumOfNumbers, numbers);

function shuffle(Password) {
    let currentIndex = Password.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [Password[currentIndex], Password[randomIndex]] = [Password[randomIndex], Password[currentIndex]];
    }
    return Password;
}

shuffle(Password)
window.alert('Congrats!! Your randomly generated password is:    ' + Password.join(''));
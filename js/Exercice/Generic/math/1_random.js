// user input
let user_input = prompt('Please provide a max range');
// conversion
let random_number = randomInt(+user_input);
// random number generation
if (Number.isInteger(+random_number)){
    document.write('Congradulations You Won!' + '<br>');
    document.write('Random Number Is ' + random_number);
}else{
    document.write('Sorry =( Wrong input type');
}

// f's
function randomInt(max){
    return Math.round(Math.random() * max);
}

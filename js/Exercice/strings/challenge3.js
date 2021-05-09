// number guessing game

// vars
let count = 2;
let guess = false;
let num_guess = 0;
let number = getRandomInt(10);
document.write(+number);

// wait 200ms to pop-up promt to load the html first
setTimeout(function () {
    guess_game();
}, 200)

function guess_game() {
    while (count > 0 && (guess === false)) {
        num_guess = prompt(`Guess : ${count + 1}`);
        // cast prompt to numberical
        if (+num_guess === number) {
            count = 0;
            guess = true;
            document.write('Congragulations, you found the number!');
            break;
        } else if (count === 1) {
            num_guess = prompt(`Last chance : ${count}`);
            document.write('Congragulations, you found the number!');
            break;
        }
        count--;
    }
}

// generate random int
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
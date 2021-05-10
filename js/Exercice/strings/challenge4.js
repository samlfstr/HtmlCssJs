// The quiz application
/*
* Ask questions
* Keep track of the right answers
* Rank the player
*/

var correct_answers = 0;
let i = 0;
let answer;
let questions = [
    'What is the letter that comes after y ?',
    'What is name of the black president of U.S ?',
    'How do you call a flying transportation vehicle ?',
    'What is the name of tallest mountain ?',
    'What is the capital of England ?',
];

let answers = [
    'z',
    'obama',
    'plane',
    'everest',
    'london',
];
lp();
function lp() {
    while (i < 5) {
        answer = prompt(questions[i]);
        if (answer === answers[i]) {
            correct_answers ++;
        }
        i++;
    }
    if (correct_answers === 1 || correct_answers === 2){
        document.querySelector('.ranking').innerText = `Bronz`;
    }else if (correct_answers === 3 || correct_answers === 4){
        document.querySelector('.ranking').innerText = `Silver`;
    }else if (correct_answers === 5){
        document.querySelector('.ranking').innerText = `Gold`;
    }else{
        document.querySelector('.ranking').innerText = `Sorry :(`;
    }
}


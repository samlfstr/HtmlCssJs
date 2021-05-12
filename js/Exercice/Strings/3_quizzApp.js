// The quiz application
/*
* Ask questions
* Keep track of the right answers
* Rank the player
*/

var correct_answers = 0;
let i = 0;
let answer;
const p = document.querySelector('.ranking');
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
    // because the p has a reference to the ranking html content I can use it
    if (correct_answers === 1 || correct_answers === 2){
        p.innerText = `Bronz`;
    }else if (correct_answers === 3 || correct_answers === 4){
        p.innerText = `Silver`;
    }else if (correct_answers === 5){
        p.innerText = `Gold`;
    }else{
        p.innerText = `Sorry :(`;
    }
}


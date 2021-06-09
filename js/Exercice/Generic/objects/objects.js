// multi dimentional objects

let questions = [
    {

        Question : 'What is your name ?',
        Answer : 'Samuel'
    },
    {
        Question : 'Where are you from ?',
        Answer : 'Jerusalem'
    },
    {
        Question : 'What is your profession ?',
        Answer : 'Programmer'
    },

];

/*
for of then for in
question represents each question
question key represents keys of each question block
and then because you are inside the for in loop
you can either call properties / keys or property values / values
*/
for (const question of questions) {
    for (const questionKey in question) {
        document.write(`${questionKey} : `+ question[questionKey] + '<br>');
        document.write('<br>');
        document.write('<hr>');
    }
}
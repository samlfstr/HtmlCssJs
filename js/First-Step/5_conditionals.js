// check if the uppercase counts
let nameA = 'Samuel';
let nameB = 'samuel';

if (nameA === nameB){
    document.write('Name A and B are the same');
}else{
    document.write('Name A and B are different');
}
// how to cast when prompt returns a string value
let age = prompt('How old I am ? ');
let current_age = 27;
// you can add + sign in front of the prompt var to cast it into number
if(+age === current_age){
    document.getElementById('test').innerText = 'Congratulations ! You guested it right.';
} else{
    document.querySelector('.test').innerText = 'Sorry ! Your guess was wrong';
}

// ampersand (&&) is used to say and
// logical or operator (||)



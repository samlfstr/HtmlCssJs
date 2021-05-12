// Take all the inputs from the user
let f_name = prompt('First Name');
let l_name = prompt('Last Name');
let c_name = prompt('Country');
let phone  = prompt('Phone Number');

// Combine the story
let sentence = `Hello there my name is ${f_name} ${l_name} and I live in ${c_name}. If you would like to be in touch, you can call me from this number ${phone}`;

// Display the story between the main tags
document.querySelector('.parag').innerText = sentence;
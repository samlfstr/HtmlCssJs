// taking data from user
let name = prompt('What is your name ?');
let full_name = `<p> Hello my name is ${name} </p>`;
document.write(`Hello, ${name}. How are you to day ?`);

// now change the content of h1
document.querySelector('.test').innerText = "Welcome!";

//  change an id
document.querySelector('.test').innerText = "Back!";

// innerHtml returns the complete tag not only what's contained in it
document.querySelector('h1').innerHTML = '<p>Hello there</p>';

// instead of hard codding you can use a variable
document.querySelector('.test').innerHTML = full_name;
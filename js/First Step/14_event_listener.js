/*
* document is a global variable
* all global variables can be seen under the window keyword
*/

// first we select the element by id
const x = document.getElementById('test');
const y = document.getElementById('make_red');
const z = document.getElementById('text_input');

// then add the event listener
x.addEventListener('click', () => {
    x.style.color = 'grey';
});

// an element can have multiple event listeners
x.addEventListener('dblclick', () => {
    x.style.color = 'white';
});

/*
What I do here is to change the color of one selected html element
with the input value provided from the user, and the event of course
is added to the button, so dom is listening for the submit button
so z.value takes the user input through text input area and assign
the value provided by user to the style of the h1 tag which has an
id of 'test'
*/
y.addEventListener(
    'click',
    () => {
       x.style.color = z.value;
    }
);
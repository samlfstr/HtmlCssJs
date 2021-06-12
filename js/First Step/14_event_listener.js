// first we select the element by id
const x = document.getElementById('test');

// then add the event listener
x.addEventListener('click', () => {
    x.style.color = 'grey';
});

// an element can have multiple event listeners
x.addEventListener('dblclick', () => {
    x.style.color = 'white';
});

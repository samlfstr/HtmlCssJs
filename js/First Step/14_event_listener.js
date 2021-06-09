// first we select the element by id
const listen = document.getElementById('test');

// then add the event listener
listen.addEventListener('click', () => {
    listen.style.color = 'red';
});
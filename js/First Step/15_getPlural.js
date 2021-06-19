// plural getter by tag name
const x = document.getElementsByTagName('p');

// document.write(x[0].innerText + '<br>');

// by class name
const y = document.getElementsByClassName('parag');

for (let i = 0; i < y.length; i++) {
    y[i].style.color = 'red';
}


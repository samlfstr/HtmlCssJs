// select inputs
let one = document.getElementById('id_one');
let two = document.getElementById('id_two');
let three = document.getElementById('id_three');

let all;

// select buttons
let del = document.getElementById('delete');
let sub = document.getElementById('submit');

// add event listener to delete button
del.addEventListener(
    'click',
    () => {
        one.value = '';
        two.value = '';
        three.value = '';
    }
);
// add event listener to delete button
sub.addEventListener(
    'click',
    () => {
        all = [
            one.value,
            two.value,
            three.value,
        ]
        console.log(all);
    }
);

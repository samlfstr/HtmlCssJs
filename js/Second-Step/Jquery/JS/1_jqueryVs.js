// select an element with js
const why_d = document.querySelector('#user');

// call back listener function
why_d.addEventListener(
    'click',
    ()=>{
       // why_d.style.display = 'none';
    }
);

// select an element with jquery
$('#user').dblclick(
    ()=>{
        $('#user').hide();
    }
);

// show and hide an element
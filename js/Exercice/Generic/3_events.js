// select
const x = document.getElementById('test');

// test the selection
x.innerText = "Some thing";


x.addEventListener(
    'click',
    () =>{
        x.style.color = 'red';
    }
);


x.addEventListener(
    'dblclick',
    ()=>{
        x.style.border = '1px black solid';
    }
);
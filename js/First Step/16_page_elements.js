// style the table

const all = document.querySelectorAll('tr:nth-child(even)');

all.forEach(loop_t);

function loop_t (index, item){
    console.log(index.innerText);
    index.style.backgroundColor = 'lightgray';
}
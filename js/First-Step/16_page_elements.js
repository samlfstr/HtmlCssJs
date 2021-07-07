// style the table and select with innerText&textContent
const table_color = document.querySelectorAll('tr:nth-child(even)');
const text_content = document.querySelectorAll('tr');

table_color.forEach(loop_1);
text_content.forEach(loop_3);
text_content.forEach(loop_4);

//<editor-fold desc="Text color">
function loop_1 (index,  item){
    index.style.backgroundColor = 'lightgray';
}
function loop_2 (index,  item){
    index.style.backgroundColor = 'lightgray';
}
//</editor-fold>

//<editor-fold desc="innerText & textContent">
function loop_3 (index, item){
    console.log(index.innerText);
}

function loop_4 (index, item){
    console.log(index.textContent);
}

//</editor-fold>

//<editor-fold desc="innerText & textContent Comparison">
let s = [
    text_content[0].innerText,
    text_content[0].textContent
]

console.log(typeof s[0]); // string
console.log(typeof s[1]); // string
//</editor-fold>

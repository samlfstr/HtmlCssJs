// how to check a form value
let fname = document.querySelector('#fname');

if (fname.value === ''){
    document.write('First name is empty');
}else{
    document.write('Not empty');
}
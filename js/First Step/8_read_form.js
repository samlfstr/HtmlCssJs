// how to check a form value
let fname = document.querySelector('#fname');

if (fname.value === ''){
    // document.write('First name is empty');
}else{
    // document.write('Not empty');
}


// more delicat way of handling the conditional statement would be

if(!fname.value){
    document.write('First name is empty');
}else{
    document.write('Not empty');
}
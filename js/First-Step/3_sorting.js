// sorting function
function compare(a, b){
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -1;
}

let arr = [1,2,3,4,5];

// document.write(arr.sort(compare));
let names = 'Bilbo, Gandalf, Nazgul';
let arg = names.split(', ');
for (let name of arg){
    document.write(name + ', ');
}

arr_joined = arr.join('');


let result = arr.reduce((sum, current) => sum + current);
document.write(result);









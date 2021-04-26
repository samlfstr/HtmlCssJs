/*Data Types*/

// Length
let my_name='Aaron';
console.log(my_name.length);

// Substring
let car_type = "Mercedes";

// If the term is found in the string Mercedes -
// then return true else return false
if(car_type.indexOf('es') === -1){
    console.log('False');
}else{
    console.log('True');
}

// or if es not null then return true
// !== means not -1 means null
if(car_type.indexOf('es') !== -1){
    console.log('True');
}else{
    console.log('False');
}

// single characters
let life = 'is a bitch';
console.log(life[0] + life[1] + life[3]);

// reverse the order
let i = life.length;
for (i; i > 0; i--) {
    console.log(life[life.length-i]);
}

// mixing slice() and indexOf()
let index = life.indexOf('a');
// after the 'a' included
console.log(life.slice(index));
// before the 'a' excluded
console.log(life.slice(0,index));

// lowercase
console.log(life.toLocaleLowerCase());
// uppercase
console.log(life.toUpperCase());

//make first letter upper case













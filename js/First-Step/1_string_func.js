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
// show/cut after the 'a' included
console.log(life.slice(index));
// show/cut before the 'a' excluded
console.log(life.slice(0,index));

// lowercase
console.log(life.toLocaleLowerCase());
// uppercase
console.log(life.toUpperCase());

//make only the first letter upper case
let coutry = "AmERiCa";
coutry = coutry.toLowerCase();
country = coutry.replace(coutry[0],coutry[0].toUpperCase());
console.log(country);


// find the last index of
let name = "Brandon";
index_n = name.lastIndexOf('n');
console.log(name[index_n]);

// modbus request simulation
let signal = '0000000010010011';
console.log('Device ID - ' + signal.slice(0,2));
console.log('Function Name - ' + signal.slice(2,4));
console.log('Data Adress - ' + signal.slice(4,8));
console.log('Data Length - ' + signal.slice(8,12));
console.log('CRC - ' + signal.slice(12,16));

// template way of concatination
let phrase = 'This is the day';
let phrase1 = 'Bitch';
let phrase2 = 'Tirelessly Ayy';

let full_sentence = `${phrase} ${phrase1} ${phrase2}`;
console.log(full_sentence);







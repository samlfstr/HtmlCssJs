// objects
let x = {
    name : 'Samuel',
    surname :'Foster',
    pairs : [0,2,4,6,8]
};

document.write(x['pairs']);
document.write('<br>');


// objects keys and values
let pi = {
    a : 'AY',
    b : 'BE',
    c : 'SI'
};

document.write(Object.keys(pi)); // a, b, c
document.write('<br>');
document.write(Object.values(pi)); // AY, BE, SI
document.write('<br>');


for(let item in x){
    document.write(`${item.toUpperCase()} : ` + x[item] + '<br>');
}

document.write('<br>');

// spread operator
let pair = {
    p : [0,2,4,6,8]
};

let impair = {
    i : [1,3,5,8,9]
};

let numbers = {
    ...pair,
    ...impair
};

for (const prop in numbers) {
    document.write( `${prop} : ` + `${numbers[prop]}` + '<br>');
}

/*
* item represents the name of the property prop in short
* x is the name of the object we can easily write something like
* x['name']
*/


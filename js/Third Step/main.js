// add/remove array methods
let currency = ['dollar','euro','lira'];

// add to end
currency.push('yen');
console.log(currency);

// remove from the end
currency.pop();
console.log(currency);

// add to the beginning
currency.shift();
console.log(currency);
// remove from the beginning
currency.unshift('CFA');
console.log(currency)

// using the splice method
let letters = ['a','b','c','d','e'];
letters.splice(0, 1,'A');
console.log(letters);

// and then we got slice which creates a copy
let numbers = ['a','b','c'];
console.log(numbers.slice(0,3));

// start from the end of the list
let primes = ['2','3','5'];
primes.splice(-1,1,'7');
console.log(primes);

// arrays with keys
let odds = {
    'one':1,
    'three':3,
    'five':5
};

console.log(odds);

// for each
let pairs = [1,2,3,4,5,6,7,8,9];

pairs.forEach(each);
// that is sufficiant to call the function
function each(item, index) {
    console.log(pairs[index]);
}

pairs.forEach(mulByTen);
// multiply by 10
function mulByTen(item, index){
    console.log(pairs[index] * 10);
}

pairs.forEach(special_f);
// multiply by ten then minus 1
function special_f (index){
    console.log((pairs[index] * 10) - 1);
}

pairs.forEach(saveInside);
// save the result inside an array
function saveInside(item, index){
    pairs[index] = item * 31;
}

console.log(pairs);











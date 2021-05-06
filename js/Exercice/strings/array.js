// create an array
let names = [
    'Samuel Foster',
    'Cengizhan Ozsoy',
    'Aaron Foster'
];

// for each loop the order of parameters is important
names.forEach(loop_names);
function loop_names(item, index){
    document.write(names[index] + '<br>');
}

// arrays with key values paires
let num = {
    'ONE' : 1,
    'TWO' : 2,
    'THREE' : 3,
    'FOUR' : 4,
    'FIVE' : 5,
};

for (var key in num) {
    document.write(key + " : " + num[key] + '<br>');
}


// normal function
function add( a, b ){
    return a + b;
}

// function expression
sum = function ( a, b ){
    return a + b;
};


// function exp with arrow notation
sum_arw = ( a, b ) => {
    return a + b;
};


document.write(add(5,4) + '<br>'); // 9
document.write(sum(1,3) + '<br>'); // 4
document.write(sum_arw(5,9) + '<br>'); // 14
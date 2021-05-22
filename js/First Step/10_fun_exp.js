// from normal function to arrow fun exp notation
function mul_2 (item){
    return item * 2;
}

// fun exp / anonymous fu
let mul_two = function(item){
    return item * 2;
};

// fun exp arrow
let mul_to = (item) => {
    return item * 2;
};


document.write(mul_to(2) + '<br>');
document.write(mul_two(2) + '<br>');
document.write(mul_2(2) + '<br>');
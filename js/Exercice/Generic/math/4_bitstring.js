// bit string assignment
bit_string = function (bit_str){
    if(bit_str.length >= 4){
        return bit_str.slice(bit_str.length - 2);
    }else{
        msg = 'Str length should be greater than 4!';
    }
    return msg;
}

document.write(bit_string('0010010') + '<br>');
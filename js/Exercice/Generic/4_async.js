
function add (a, b, callback){
    callback(a+b);
}

function x (Y){
    document.write( Y + '<br>');
}

add(1,2,x);

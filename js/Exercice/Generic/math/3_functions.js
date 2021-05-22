const pi = 22/7;

// area of a rectange
let area_rectangle = function (height, width){
    return height * width;
};

// area of a cercle
let area_cercle = function (radius){
    return pi * Math.pow(radius,2);
};


// volume of a syphere
let volume_sphere = function (radius){
    return (4/3) * pi * Math.pow(radius,3);
};


// function acho all
function show_result(){
    console.log(area_rectangle(50,50));
    console.log(area_cercle(15));
    console.log(volume_sphere(30));
}

show_result();
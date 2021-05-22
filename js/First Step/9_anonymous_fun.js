// get random number function stored in a variable

let random_num = function (max) {
    return Math.round(Math.random() * max);
};

// Each time that anonymous function is called a diffrent random value is generated
for (let i = 0; i < 10; i++) {
    console.log(random_num(10));
}

/*
* Anonymous functions or function expressions can not be called
* before their declaration but function declarations (functions as we know)
* can be called before their declaration, hense a functoin expression
* should be called after it's body or declaration
* And hoisting is the ability of the js to know all the declared functions
*/
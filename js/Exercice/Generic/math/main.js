// random integers


for (let i = 0; i < 10; i++) {
  // document.write(getRandomInt(10) + '<br>');
}


// random integer function with floor
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

/*
* La raison pourlaquelle on utilise floor parce qu'il renvoie le plus grand entier supérieur ou égale à max.
*/

// même le résultat est prèsque égale à 4 la valeur qui retourne est 3
document.write(Math.floor(3.9) + '<br>');

// et l'opposé de math floor est math ceil
document.write(Math.ceil(3.1));
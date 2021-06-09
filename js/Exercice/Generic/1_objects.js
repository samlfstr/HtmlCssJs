// create an array with curly braces
const arr = {
  name : 'Samuel',
  first_name : 'Foster',
  age : '27'
};


// take all the properties / keys
for (const arrKey in arr) {
    document.write(arr[arrKey] + '<br>');
}

// take all the keys using a different method
// this method stores all the keys in an array
document.write( Object.keys(arr) + '<br>');


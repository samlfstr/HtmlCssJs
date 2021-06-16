// create an array with curly braces
const arr = {
  name : 'Samuel',
  first_name : 'Foster',
  age : '27'
};

const arr2 = {
    colours : {
        red : '#aaa',
        blue : '#bbb',
        green : '#ccc'
    },
    type : 'cool',
    numbers : {
        one : '1',
        two: '2',
        three : '3'
    }
}

for (const arr2Key in arr2) {
    document.write(arr2Key + arr2[arr2Key] + '<br>');
}

// take all the properties / keys
for (const arrKey in arr) {
    // document.write(arr[arrKey] + '<br>');
}

// take all the keys using a different method
// this method stores all the keys in an array
// document.write( Object.keys(arr) + '<br>');


// we can use css selectors inside querySelector
const second = document.querySelector('.container li:nth-of-type(2)');
second.innerHTML = 'red';

// grab all the elements / they are stored in an array element
const container = document.querySelectorAll('.container li.item');

// loop using for funciton
for (var i = 0; i < container.length; i++) {
    // console.log(container[i]);
}

// for-of is an extention a normal loop
// that way I can even modify styles using vanilla js
for (items of container){
    items.style.listStyle = "none";
    items.style.color = "red";
    // console.log(items);
}

// another way of looping through a document.querySelectorAll('');
Array.from(container).forEach(function(items){
    console.log(items);
});


// and if I want to use keys I can use for-in
// this is used with js objects

let items = {a:1, b:2, c:3};

for (let item in items) {
    console.log(`${item} = ${items[item]}`);
}




/*
* Jquery uses $('') that syntax to query
* Vanilla js uses document.querySelector('') that syntax
* When you do do that without providing any parameters like ".value"
* it grabes the whole line of html code
* However querySelector returns just one element even if the class name
* is pointing multiple elements so how do we grab all the elements
* that has the same class name or id, well we use the function
* document.querySelectorAll();
*/

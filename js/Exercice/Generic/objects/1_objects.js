// images cards

let pets = [
    {
        name: 'wolf',
        age: '1',
        photo: 'wolf.png'
    },
    {
        name: 'cat',
        age: '2',
        photo: 'cat.png'
    },
    {
        name: 'dog',
        age: '1',
        photo: 'dog.png'
    },
    {
        name: 'rat',
        age: '2',
        photo: 'rat.png'
    },
    {
        name: 'squirrel',
        age: '1',
        photo: 'squirrel.png'
    },
];

for (const pet of pets) {
    for (const petKey in pet) {
        console.log(pet['photo']);
    }
}

// you could have used a string var to store all the text elements
for (const pet of pets) {
    document.querySelector('.container').innerHTML += `
  <div class="pics">
    <h2>Name : ${pet['name']} </h2>
    <h5>Age  : ${pet['age']}  </h5> 
    <img class="_img" src="images/${pet['photo']}" alt="${pet['name']}">
    <hr>
  </div>
`;

    /*  document.querySelector('.container').insertAdjacentHTML('afterbegin',`
      <div class="pics">
        <img id="_img" src="images/${pet['photo']}" alt="img">
      </div>
    `);*/
}

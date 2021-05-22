// data object (mixed ingredients)
const neptun = {
    name: 'Neptun',
    diameter: '423123',
    moons: '3',
    temperature: '-243',
    orbit_days: '234',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam aspernatur debitis, et excepturi nesciunt perspiciatis quasi quia repudiandae totam. Aliquid amet ea eaque eius itaque nulla odio quos sunt? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eaque eveniet fugit hic itaque nemo neque! Accusamus accusantium, beatae dignissimos earum eligendi esse, excepturi fuga minima natus repellendus rerum vitae!'
};

// function structure (goes to the oven)
function createCard(planet) {
    return card =
        '<div class="container">' +
        '    <div class="left">' +
        '      <img id="?" src="?.png" alt="?">' +
        '      <strong><h1> '+planet.name+'</h1></strong>' +
        '      <p>'+planet.description+'</p>' +
        '      <strong><h3>Planet Profile</h3></strong>' +
        '      <ul>' +
        '        <li><strong>Diameter : </strong>'+planet.diameter+'</li>' +
        '        <li><strong>Moons : </strong> '+planet.moons+'</li>' +
        '        <li><strong>Tamprature : </strong> '+planet.temperature+'</li>' +
        '        <li><strong>Orbit Period : </strong> '+planet.orbit_days+'</li>' +
        '      </ul>' +
        '      <p>'+planet.description+'</p>' +
        '    </div>' +
        '    <div class="right">' +
        '      <img id="?" src="?.png" alt="?">' +
        '      <h1> '+planet.name+'</h1>' +
        '      <p>'+planet.description+'</p>' +
        '      <strong><h3>Planet Profile</h3></strong>' +
        '      <ul>' +
        '        <li><strong>Diameter : </strong>'+planet.diameter+'</li>' +
        '        <li><strong>Moons : </strong> '+planet.moons+'</li>' +
        '        <li><strong>Tamprature : </strong> '+planet.temperature+'</li>' +
        '        <li><strong>Orbit Period : </strong> '+planet.orbit_days+'</li>' +
        '      </ul>' +
        '      <p>'+planet.description+'</p>' +
        '    </div>' +
        '  </div>';
}

// html injection (served)
// document.querySelector('body > .container').innerHTML = createCard(neptun);
document.querySelector('.container').insertAdjacentHTML('afterend', createCard(neptun));
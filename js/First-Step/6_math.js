// doing some math

// one hour
let hour = 1;
let minutes = 60;
let seconds = minutes * 60;

// one day
let day_hours = 24 * hour;
let day_minutes = minutes * day_hours;
let day_seconds = day_minutes * minutes;

// one year
let year_hours = 365 * day_hours;
let year_minutes = minutes * year_hours;
let year_seconds = year_minutes * minutes;

document.write(year_hours + "<br>");
document.write(year_minutes + "<br>");
document.write(year_seconds + "<br>" + "<br>");

// years to second conversion
let age = 26;

let alive_seconds = age * year_seconds;

document.querySelector('.test').innerText = `${alive_seconds}`;
/*

// convert string into numerical type
let red_cars = prompt('Please enter the red car number');
let white_cars = prompt('Please enter the white car number');
var total_cars = red_cars + white_cars;

// it'll return a string
document.write('<strong>' + total_cars + '</strong>' + '<br>');

// how to cast well use parse =)
total_cars = parseInt(red_cars) + parseInt(white_cars);

// returns a integer value
document.write(total_cars);

*/


const width = '190px';
const totalImages = 10;
let width_index = width.indexOf('p');
let width_int = parseInt(width.slice(0,width_index));
let totalWidth = width_int * totalImages;

document.write(parseInt('.5'));








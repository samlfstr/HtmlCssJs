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
document.write(year_seconds + "<br>");

// years to second conversion
let age = 26;

let alive_seconds = age * year_seconds;


document.querySelector('.test').innerText = `${alive_seconds}`;
// get the dialines
const dialinesEl = document.getElementsByClassName('dialines');


// get the clock
const clockEl = document.getElementById('clock');

// draw the dialines
for (let i =1; i < 60; i++) {
    clockEl.innerHTML += `<div class="dialines"></div>`;
    dialinesEl[i].style.transform = `rotate(${6*i}deg)`;
}

// make the clock
function clock(){
    // variabless
    const d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
        date = d.getDate(),
        month = d.getUTCMonth() + 1,
        year = d.getFullYear(),

        // calculate the clock work the goal is to reach 360 degree
        // how many hours do I have 12 and degrees 360,
        // 360 / 12 = 30, one hour is 30 degrees
        // how many minuts do I have 720 and degrees 360 that devided by minuts
        // 360 / 720 multiplied by m that'll give me minuts
        hDeg = h * 30 + m * (360/720);
        mDeg = m * 6 + s * (360/3600);
        sDeg = s * 6;

        // get the hands
        hourEl = document.querySelector(".hour-hand");
        minEl = document.querySelector(".minute-hand");
        secondEl = document.querySelector(".second-hand");
        dateEl = document.querySelector(".date");

        // set the clock
        hourEl.style.transform = `rotate(${hDeg}deg)`;
        minEl.style.transform = `rotate(${mDeg}deg)`;
        secondEl.style.transform = `rotate(${sDeg}deg)`;

        dateEl.innerHTML = `${date}/${month}/${year}`;
}

setInterval("clock()",10);










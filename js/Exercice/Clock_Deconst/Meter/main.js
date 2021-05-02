
const linesEl = document.getElementsByClassName('v_lines');

const meterEl = document.getElementById('meter');

for (let i =1; i < 60; i++) {
    meterEl.innerHTML += `<div class="v_lines"></div>`;
    linesEl[i].style.transform = `translateX(${.59*i}em)`;
}
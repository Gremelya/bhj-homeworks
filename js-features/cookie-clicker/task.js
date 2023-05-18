const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');


cookie.onclick = function () {
    counter.innerText++;
    const num = counter.innerText;
    if (num % 2 === 0) {
        cookie.width /= 2;
    } else {
        cookie.width *= 2;
    }
};
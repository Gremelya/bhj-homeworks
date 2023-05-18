const sec = document.getElementById('timer');

const timer = setInterval(()=>{
    sec.innerText--;
    if (sec.innerText == 0) {
        alert('Вы победили в конкурсе');
        clearInterval(timer);
    }
}, 1000);
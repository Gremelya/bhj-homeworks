let rotators = Array.from(document.getElementsByClassName('rotator'));

rotators.forEach(el => {
    let r = el.querySelectorAll('.rotator__case');
    let count = 0;
    let interval = r[count].dataset.speed;
    let colorOfRotator = r[count].dataset.color;
    r[count].style.color = colorOfRotator;

    setTimeout(rotate, interval);

    function rotate() {
        r[count].classList.remove('rotator__case_active');
        ++count;

        if (count === r.length) count = 0;

        interval = r[count].dataset.speed;
        r[count].classList.add('rotator__case_active');
        colorOfRotator = r[count].dataset.color;
        r[count].style.color = colorOfRotator;

        setTimeout(rotate, interval);
    }
});

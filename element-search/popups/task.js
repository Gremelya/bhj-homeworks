const popup = document.querySelector('#modal_main');
const close = document.querySelectorAll('div.modal__close');
const successBtn = document.querySelector('.show-success');
const success = document.querySelector('#modal_success');


popup.className = 'modal modal_active';

close[0].onclick = function () {
    popup.className = 'modal';
};

successBtn.onclick = function () {
    success.className = 'modal modal_active';
};

close[1].onclick = function () {
    popup.className = 'modal';
    success.className = 'modal';
};
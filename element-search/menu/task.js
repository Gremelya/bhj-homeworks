const links = document.querySelectorAll('.menu__link');

for (let link of Array.from(links)) {
    link.onclick = function () {

        const parent = link.parentElement;
        if (parent.querySelector('.menu_sub').className === 'menu menu_sub') {
            parent.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
        } else {
            parent.querySelector('.menu_sub').className = 'menu menu_sub'
        }

        if (link.closest('.menu_main')) {
            return false
        }
    }
}
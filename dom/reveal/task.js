let blocks = Array.from(document.getElementsByClassName('reveal'));

for (const block of blocks) {
    window.addEventListener('scroll', function() {
        const monitorHeight = window.innerHeight;
        const blockTop = block.getBoundingClientRect().top;

        (blockTop < monitorHeight && blockTop > 0) ? block.classList.add('reveal_active') : block.classList.remove('reveal_active');
    });
}

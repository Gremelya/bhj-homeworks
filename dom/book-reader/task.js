let book = document.querySelector('.book');
let bookFontSize = document.querySelector('.book__control_font-size');
let bookTextColor = document.querySelector('.book__control_color');
let bookBackgroundColor = document.querySelector('.book__control_background');

bookFontSize.addEventListener('click', function(event) {
    let activeFontSize = document.querySelector('.font-size_active');
    activeFontSize.classList.remove('font-size_active');
    event.target.classList.add('font-size_active');

    if (event.target.dataset.size === 'small') {
        if (book.classList.contains('book_fs-big')) book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
    } else if (event.target.dataset.size === 'big') {
        if (book.classList.contains('book_fs-small')) book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
    } else {
        if (book.classList.contains('book_fs-small')) book.classList.remove('book_fs-small');
        else if (book.classList.contains('book_fs-big')) book.classList.remove('book_fs-big');
    }

    event.preventDefault();
});

bookTextColor.addEventListener('click', function(event) {
    let activeFontColor = document.querySelector('.color_active');
    activeFontColor.classList.remove('color_active');
    event.target.classList.add('color_active');

    if (event.target.dataset.color === 'gray') {
        if (book.classList.contains('book_color-whitesmoke')) book.classList.remove('book_color-whitesmoke');
        book.classList.add('book_color-gray');
    } else if (event.target.dataset.color === 'whitesmoke') {
        if (book.classList.contains('book_color-gray')) book.classList.remove('book_color-gray');
        book.classList.add('book_color-whitesmoke');
    } else {
        if (book.classList.contains('book_color-whitesmoke')) book.classList.remove('book_color-whitesmoke');
        else if (book.classList.contains('book_color-gray')) book.classList.remove('book_color-gray');
    }

    event.preventDefault();
});

bookBackgroundColor.addEventListener('click', function(event) {
    let activeFontColor = document.querySelector('.color_active');
    activeFontColor.classList.remove('color_active');
    event.target.classList.add('color_active');

    if (event.target.dataset.color === 'gray') {
        if (book.classList.contains('color_black')) book.classList.remove('color_black');
        book.classList.add('color_gray');
    } else if (event.target.dataset.color === 'black') {
        if (book.classList.contains('color_gray')) book.classList.remove('color_gray');
        book.classList.add('color_black');
    } else {
        if (book.classList.contains('color_gray')) book.classList.remove('color_gray');
        else if (book.classList.contains('color_black')) book.classList.remove('color_black');
    }

    event.preventDefault();
});

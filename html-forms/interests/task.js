let interestsMain = document.querySelector('.interests_main'),
    interestCheck = interestsMain.querySelectorAll('.interest'),
    checkedInterests,
    allInterests,
    parentInterest,
    main;

interestCheck.forEach(el => {
    el.addEventListener('change', function(event) {
        main = event.target.closest('.interest').querySelector('.interests_active');
        
        if (main !== null) {
            main.querySelectorAll('.interest__check').forEach(e => {
                e.checked = event.target.checked;
            });
        }
        
        if(el.closest('.interests').classList.contains('interests_active')) {
            parentInterest = el.closest('.interests').closest('.interest').querySelector('.interest__check');
            allInterests = el.closest('.interests').querySelectorAll('.interest__check');
            checkedInterests = el.closest('.interests').querySelectorAll('.interest__check:checked');
        } else {
            parentInterest = el.querySelector('.interest__check');
            allInterests = el.querySelectorAll('.interest__check');
            checkedInterests = el.querySelectorAll('.interest__check:checked');
        }

        if (checkedInterests.length === 0) {
            parentInterest.indeterminate = false;
            parentInterest.checked = false;
        } else if (checkedInterests.length < allInterests.length) {
            parentInterest.indeterminate = true;
            parentInterest.checked = false;
        } else if (checkedInterests.length === allInterests.length) {
            parentInterest.indeterminate = false;
            parentInterest.checked = true;
        }
    });
});

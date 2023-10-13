const groupInputs = document.querySelectorAll('.interests_main > ul > li > label > input');
for(groupInput of groupInputs) {
    groupInput.addEventListener('change', (e) => {
        const checked = e.currentTarget.checked;
        const childInputs = e.currentTarget.parentNode.nextElementSibling.querySelectorAll('input.interest__check');
        for(childInput of childInputs) {
            childInput.checked = checked;
        }
    });
}


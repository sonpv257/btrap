document.querySelectorAll('.increase-qty').forEach(button => {
    button.addEventListener('click', function () {
        const input = this.parentElement.querySelector('.quantity-input');
        input.value = parseInt(input.value) + 1;
    });
});

document.querySelectorAll('.decrease-qty').forEach(button => {
    button.addEventListener('click', function () {
        const input = this.parentElement.querySelector('.quantity-input');
        if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
        }
    });
});

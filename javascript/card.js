document.querySelectorAll('.case-card').forEach(card => {
    card.addEventListener('click', function () {
        // Close any open cases first
        document.querySelectorAll('.case-details').forEach(detail => {
            detail.classList.add('hidden');
        });

        // Open this case
        const details = this.querySelector('.case-details');
        details.classList.remove('hidden');
    });
});

document.querySelectorAll('.close-case').forEach(button => {
    button.addEventListener('click', function (e) {
        e.stopPropagation();
        this.closest('.case-details').classList.add('hidden');
    });
});
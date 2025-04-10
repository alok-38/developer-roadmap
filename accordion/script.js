const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        // Close all other open items
        accordionItems.forEach(i => {
            if (i !== item) i.classList.remove('open');
        });

        // Toggle current one
        item.classList.toggle('open');
    });
});

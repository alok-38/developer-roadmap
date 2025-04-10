document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            // Remove 'active' class from all contents and tabs
            contents.forEach(content => content.classList.remove('active'));
            tabs.forEach(t => t.classList.remove('active'));

            // Add 'active' class to the clicked tab and its corresponding content
            document.getElementById(`content-${target}`).classList.add('active');
            tab.classList.add('active');
        });
    });
});

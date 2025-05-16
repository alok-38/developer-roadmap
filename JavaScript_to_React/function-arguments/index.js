function createButton(action, target) {
    return `<button id="actionBtn">${action} ${target}</button>`;
}

const app = document.getElementById('app');
app.innerHTML = createButton('Dislike', 'Video');

const button = document.getElementById('actionBtn');

button.addEventListener('click', () => {
    // Get the current button text
    const [currentAction, target] = button.textContent.split(' ');

    // Toggle the action
    const newAction = currentAction === 'Dislike' ? 'Like' : 'Dislike';

    // Update the button text
    button.textContent = `${newAction} ${target}`;
});
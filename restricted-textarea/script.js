const textarea = document.querySelector('textarea');
const leftSpanEl = document.querySelector('span:first-of-type');
const rightSpanEl = document.querySelector('span:last-of-type');
const mianDivEl = document.querySelector('main div');

const maxCount = 250;
rightSpanEl.textContent = maxCount;

function characterCount() {
    const inputText = textarea.value;
    const currentLength = inputText.length;

    leftSpanEl.textContent = currentLength;

    if (currentLength >= maxCount) {
        textarea.style.borderColor = "red";
        mianDivEl.style.color = "red";
        textarea.disabled = true;
    } else {
        textarea.style.borderColor = "";
        textarea.disabled = false;
    }
}

textarea.addEventListener('input', characterCount);

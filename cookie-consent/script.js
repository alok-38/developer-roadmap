// Show the modal only if consent hasn't been given
window.onload = function () {
    const accepted = localStorage.getItem("userConsent");
    if (!accepted) {
        document.getElementById("popupModal").classList.add("active");
    }
};

// Close the modal
function closeModal() {
    document.getElementById("popupModal").classList.remove("active");
}

// Close button (X or Cancel)
const closeModalButton = document.querySelector(".modal div button");
closeModalButton.addEventListener('click', closeModal);

// Accept button (e.g., "Accept" or "Got it!")
const mainModalButton = document.querySelector(".modal button:last-of-type:not(.modal div button)");
mainModalButton.addEventListener('click', function () {
    localStorage.setItem("userConsent", "true");
    popupModal.classList.remove("active");
});

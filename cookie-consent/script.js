// Show the modal when the page loads
window.onload = function () {
    document.getElementById("popupModal").classList.add("active");
};

// Close the modal
function closeModal() {
    document.getElementById("popupModal").classList.remove("active");
}

const closeModalButton = document.querySelector(".modal div button");
closeModalButton.addEventListener('click', closeModal);

const mainModalButton = document.querySelector(".modal button:last-of-type:not(.modal div button)");

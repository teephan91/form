const userName = document.getElementById('name');
const userNameLabel = document.querySelector(".username span")

userName.addEventListener('input', () => {
    if (userName.validity.valid) {
        userNameLabel.textContent = "";
        userName.classList.remove("error_input");
    } else {
        showError();
    }
});

function showError() {
    if (userName.validity.valueMissing) {
        userNameLabel.textContent = "Hi! I'm Bot, James Bot. And you're?";
    } else if (userName.validity.patternMismatch) {
        userNameLabel.textContent = "Special characters are not allowed!";
    }
    userName.className = "error_input";
}
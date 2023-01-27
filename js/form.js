const userName = document.getElementById('name');
const userNameLabel = document.querySelector(".username_label span")

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
    }
    userName.className = "error_input";
}
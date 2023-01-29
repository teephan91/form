const userName = document.getElementById('name');
const userNameLabel = document.querySelector('.username span');

const userEmail = document.getElementById('email');
const userEmailLabel = document.querySelector('.useremail span')

userName.addEventListener('input', () => {
    if (userName.validity.valid) {
        userNameLabel.textContent = "";
        userName.classList.remove('error_input');
    } else {
        showError(userName);
    }
});

userEmail.addEventListener('input', () => {
    if (userEmail.validity.valid) {
        userEmailLabel.textContent = "";
        userEmail.classList.remove('error_input');
    } else {
        showError(userEmail);
    }
});

function showError(input) {
    if (input == userName) {
        if (userName.validity.valueMissing) {
            userNameLabel.textContent = "Hi! I'm Bot, James Bot. And you're?";
        } else if (userName.validity.patternMismatch) {
            userNameLabel.textContent = "Special characters are not allowed!";
    }
    } else if (input == userEmail) {
        if (userEmail.validity.valueMissing) {
            userEmailLabel.textContent = "This field is required.";
        } else if (userEmail.validity.typeMismatch) {
            userEmailLabel.textContent = "Please enter a valid email address.";
        }
    }
    input.className = "error_input";
}
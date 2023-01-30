const userName = document.getElementById('name');
const userNameLabel = document.querySelector('.username span');

const userEmail = document.getElementById('email');
const userEmailLabel = document.querySelector('.useremail span')

const userPwd = document.getElementById('password');
const userPwdLabel = document.querySelector('.userpwd span');
const theEye = document.querySelector('.eye img');

const userCoName = document.getElementById('company_name');
const userCoNameLabel = document.querySelector('.userconame span');

const userURL = document.getElementById('proofhub_url');
const userURLLabel = document.querySelector('.userurl span');

const allInputs = Array.from(document.querySelectorAll('input'));
const continueBtn = document.querySelector('.continue_btn');

function isValid() {
    return allInputs.every((input) => input.validity.valid);
}

function checkValidity() {
    if (isValid()) {
        continueBtn.disabled = false;
        continueBtn.className = "submit";
    } else  {
        continueBtn.disabled = true;
        continueBtn.className = "continue_btn";
}
}

// Name input
userName.addEventListener('input', () => {
    if (userName.validity.valid) {
        userNameLabel.textContent = "";
        userName.classList.remove('error_input');
        checkValidity();
    } else {
        showError(userName);
        checkValidity();
    }
});

// Email input
userEmail.addEventListener('input', () => {
    if (userEmail.validity.valid) {
        userEmailLabel.textContent = "";
        userEmail.classList.remove('error_input');
        checkValidity();
    } else {
        showError(userEmail);
        checkValidity();
    }
});

// Password input
userPwd.addEventListener('input', () => {
    if (userPwd.validity.valid) {
        userPwdLabel.textContent = "";
        userPwd.classList.remove('error_input');
        checkValidity();
    } else {
        showError(userPwd);
        checkValidity();
    }
});

let a;
function showPwd() {
    if (a == 1) {
        userPwd.type = "password";
        theEye.src = "img/eye_slash.png";
        theEye.title = "Show password";
        a = 0;
    } else {
        userPwd.type = "text";
        theEye.src = "img/eye_open.png";
        theEye.title = "Hide password";
        a = 1;
    }
}

// Company name input
userCoName.addEventListener('input', () => {
    if (userCoName.validity.valid) {
        userCoNameLabel.textContent = "";
        userCoName.classList.remove('error_input');
        checkValidity();
    } else {
        showError(userCoName);
        checkValidity();
    }
});

// ProofHub URL input
userURL.addEventListener('input', () => {
    if (userURL.validity.valid) {
        userURLLabel.textContent = "";
        userURL.classList.remove('error_input');
        checkValidity();
    } else {
        showError(userURL);
        checkValidity();
    }
});

// For all inputs
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
    } else if (input == userPwd) {
        if (userPwd.validity.valueMissing) {
            userPwdLabel.textContent = "This field is required.";
        } else if (userPwd.validity.tooShort) {
            userPwdLabel.textContent = "Please enter at least 5 characters.";
        }
    } else if (input == userCoName) {
        if (userCoName.validity.valueMissing) {
            userCoNameLabel.textContent = "This field is required.";
        } else if (userCoName.validity.patternMismatch) {
            userCoNameLabel.textContent = "Special characters are not allowed!";
        }
    } else if (input == userURL) {
        if (userURL.validity.valueMissing) {
            userURLLabel.textContent = "This field is required.";
        } else if (userURL.validity.patternMismatch) {
            userURLLabel.textContent = "Only letters, numbers or hyphens are allowed.";
        } else if (userURL.validity.tooShort) {
            userURLLabel.textContent = "Please enter at least 3 characters."
        }
    }
    input.className = "error_input";
}
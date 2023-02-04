const userPwd = document.getElementById('password');
const theEye = document.querySelector('.eye');
const allInputs = Array.from(document.querySelectorAll('input'));
const continueBtn = document.querySelector('.continue_btn');

// Event listener for all inputs
allInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.validity.valid) {
            input.previousElementSibling.lastChild.textContent = "";
            input.classList.remove('error_input');
            checkValidity();
        } else {
            showError(input);
            checkValidity();
        }
    });
});

// For checking validity of all inputs before enabling Continue/Submit button
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

// For the hide/show eye
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

// Show different error messages for different inputs
function showError(input) {
    if (input.id === 'name') {
        if (input.validity.valueMissing) {
            input.previousElementSibling.lastChild.textContent = "Hi! I'm Bot, James Bot. And you're?";
        } else if (input.validity.patternMismatch) {
            input.previousElementSibling.lastChild.textContent = "Special characters are not allowed!";
        } 
    } else if (input.id === 'email') {
        if (input.validity.valueMissing) {
            input.previousElementSibling.lastChild.textContent = "This field is required.";
        } else if (input.validity.patternMismatch) {
            input.previousElementSibling.lastChild.textContent = "Please enter a valid email address.";
        }
    } else if (input.id === 'password') {
        if (input.validity.valueMissing) {
            input.previousElementSibling.lastChild.textContent = "This field is required.";
        } else if (input.validity.tooShort) {
            input.previousElementSibling.lastChild.textContent = "Please enter at least 5 characters.";
        }
    } else if (input.id === 'company_name') {
        if (input.validity.valueMissing) {
            input.previousElementSibling.lastChild.textContent = "This field is required.";
        } else if (input.validity.patternMismatch) {
            input.previousElementSibling.lastChild.textContent = "Special characters are not allowed!";
        }
    } else if (input.id === 'proofhub_url') {
        if (input.validity.valueMissing) {
            input.previousElementSibling.lastChild.textContent = "This field is required.";
        } else if (input.validity.patternMismatch) {
            input.previousElementSibling.lastChild.textContent = "Only letters, numbers or hyphens are allowed.";
        } else if (input.validity.tooShort) {
            input.previousElementSibling.lastChild.textContent = "Please enter at least 3 characters."
        }
    }
    input.className = "error_input";
}
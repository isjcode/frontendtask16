const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    let prevent_default = false;
    if (!checkPassword(password)) {
        prevent_default = true;
    }
    if (!checkUsername(username)) {
        prevent_default = true;
    }

    if (!checkEmail(email)) {
        prevent_default = true;
    }

    if (prevent_default) {
        e.preventDefault();
    }

});

function checkUsername(username) {
    const error = document.getElementById("username-error");
    error.innerHTML = "";
    if (username.trim().length < 6 || username[0] === username[0].toLowerCase()) {
        error.innerHTML = "Incorrect username.";
        return false;
    }
    return true;
}

function checkPassword(password) {
    const error = document.getElementById("password-error");
    error.innerHTML = "";
    if (password.trim().length < 6) {
        error.innerHTML = "Incorrect password";
        return false;
    }
    return true;
}

function checkEmail(email) {
    const re =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const error = document.getElementById("email-error");
    error.innerHTML = "";
    if (!String(email).toLowerCase().match(re)) {
        error.innerHTML = "Incorrect Email";
        return false;
    }
    return true;
}
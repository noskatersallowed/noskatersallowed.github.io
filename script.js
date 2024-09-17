document.addEventListener('DOMContentLoaded', function() {
    // Functionality for the login page
    document.getElementById('password').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            checkPassword();
        }
    });
});

function checkPassword() {
    const password = document.getElementById('password').value;
    const secretContent = document.getElementById('secret-content');
    const errorMsg = document.getElementById('error-msg');

    if (password === 'ayebull11') { // Replace 'correctPassword' with the actual password
        document.querySelector('.login-container').style.display = 'none';
        secretContent.style.display = 'block';
    } else {
        errorMsg.style.display = 'block';
    }
}

function submitQuiz() {
    // Quiz functionality can be added here
}

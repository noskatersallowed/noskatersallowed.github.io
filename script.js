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

function filterNames() {
    var input, filter, ul, li, strong, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("brothersList").getElementsByTagName("ul")[0];
    li = ul.getElementsByTagName("li");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        strong = li[i].getElementsByTagName("strong")[0]; // Assumes the name is in the first <strong> tag
        if (strong) {
            txtValue = strong.textContent || strong.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
}


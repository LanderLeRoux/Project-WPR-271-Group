
function checkpassword() {
    const username = document.getElementById('usernameform');
    const password = document.getElementById('password');

    if (username.value === "admin" && password.value === "1234") {
        console.log("Welcome in Admin");
        sessionStorage.setItem('loggedIn', 'true');
        window.location.href = "index.html";
    } else {
        console.log("Wrong Password");
        alert("Wrong Username or Password");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        checkpassword();
    });
});
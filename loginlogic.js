
function checkpassword() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (email.value === "admin@email.com" && password.value === "password") {
        console.log("Welcome in Admin");
        localStorage.setItem('loggedIn', 'true');
        window.location.href = "index.html";
    } else {
        console.log("Wrong Password");
        alert("Wrong Email or Password");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        checkpassword();
    });
});
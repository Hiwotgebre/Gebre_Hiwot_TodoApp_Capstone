document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //Here you would verify the credentials
    console.log("Logging in with", username, password)

    //Simulate login
    if (username === "user" && password === "pass") {
        // Save logged-in state
        sessionStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html' // Redirect to main page
    } else {
        alert('Invalid Credential')
    }
} )



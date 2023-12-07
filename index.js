// Sample user credentials stored in JSON format
const userCredentials = {
    "ravi":"ravi2005",
    "cpc":"123",
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Check if the username exists and the password matches
    if (userCredentials.hasOwnProperty(username) && userCredentials[username] === password) {
        // Redirect to the second page upon successful login
        window.location.href = 'R2.html';
    } else {
        
    } {
        alert('Invalid credentials. Please try again.');
    }
});
